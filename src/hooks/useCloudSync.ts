import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "../stores/userStore";

// API base URL from environment
const isDebug = process.env.VITE_DEBUG === "true";
const API_URL = isDebug
  ? "http://localhost:5277"
  : process.env.VITE_API_URL || "https://servicetalkbuddy.mysixbox.com";

interface UserData {
  id: string;
  credits: number;
  stats: {
    phrasesLearned: number;
    practiceStreak: number;
    totalTimeMinutes: number;
    lastActiveDate: string;
  };
  preferences: {
    notifications: boolean;
    darkMode: boolean;
    autoPlayAudio: boolean;
    language: string;
    ttsVoice: string;
  };
  subscription: "free" | "pro" | "family";
  familyId: string | null;
}

// Fetch user data from server
const fetchUserData = async (userId: string): Promise<UserData> => {
  const response = await fetch(`${API_URL}/api/user/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};

// Sync user data to server
const syncUserData = async (
  userId: string,
  data: Partial<UserData>,
): Promise<UserData> => {
  const response = await fetch(`${API_URL}/api/user/${userId}/sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to sync user data");
  }

  return response.json();
};

export function useCloudSync() {
  const queryClient = useQueryClient();
  const user = useUserStore((state) => state.user);
  const userId = user?.id;

  // Query to fetch user data from cloud
  const {
    data: cloudData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["userData", userId],
    queryFn: () => fetchUserData(userId!),
    enabled: !!userId, // Only run if userId exists
    refetchInterval: 30000, // Auto-refetch every 30 seconds
  });

  // Update local store when cloud data changes
  useEffect(() => {
    if (cloudData) {
      const updateStats = useUserStore.getState().updateStats;
      const updatePreferences = useUserStore.getState().updatePreferences;
      const setCredits = useUserStore.getState().setCredits;
      const setSubscription = useUserStore.getState().setSubscription;

      updateStats(cloudData.stats);
      updatePreferences(cloudData.preferences);
      setCredits(cloudData.credits);
      setSubscription(cloudData.subscription);
    }
  }, [cloudData]);

  // Mutation to sync local data to cloud
  const syncMutation = useMutation({
    mutationFn: (data: Partial<UserData>) => syncUserData(userId!, data),
    onSuccess: (data) => {
      // Update cache with new data
      queryClient.setQueryData(["userData", userId], data);
    },
    onError: (error) => {
      console.error("Sync failed:", error);
    },
  });

  // Helper function to sync current state to cloud
  const syncToCloud = () => {
    if (!userId) return;

    const state = useUserStore.getState();
    const dataToSync: Partial<UserData> = {
      credits: state.credits,
      stats: state.stats,
      preferences: state.preferences,
      subscription: state.subscription,
      familyId: state.familyId,
    };

    syncMutation.mutate(dataToSync);
  };

  return {
    cloudData,
    isLoading,
    isError,
    error,
    isSyncing: syncMutation.isPending,
    syncToCloud,
    refetch,
  };
}

// Hook for auto-sync on state changes
export function useAutoSync(interval: number = 60000) {
  const { syncToCloud } = useCloudSync();
  const user = useUserStore((state) => state.user);

  // Auto-sync every interval
  if (user?.id) {
    setInterval(() => {
      syncToCloud();
    }, interval);
  }

  return { syncToCloud };
}
