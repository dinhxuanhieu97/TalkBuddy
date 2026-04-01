import { useCallback, useState } from 'react';

// Hook for managing loading states
export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading: useCallback(
      async <T>(fn: () => Promise<T>): Promise<T> => {
        startLoading();
        try {
          const result = await fn();
          return result;
        } finally {
          stopLoading();
        }
      },
      [startLoading, stopLoading]
    ),
  };
}

// Hook for managing a boolean state
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, setValue, toggle, setTrue, setFalse };
}

// Hook for persisting state in secure storage (placeholder - implement with expo-secure-store)
export function useSecureStorage<T>(key: string, initialValue: T) {
  // Implementation would use expo-secure-store
  const [value, setValue] = useState<T>(initialValue);

  const saveValue = useCallback(
    async (newValue: T) => {
      // Would save to secure storage
      setValue(newValue);
    },
    [key]
  );

  return [value, saveValue] as const;
}
