import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import useContentSync from "../hooks/useContentSync";

interface ContentSyncUIProps {
  onClose?: () => void;
}

export const ContentSyncUI: React.FC<ContentSyncUIProps> = ({ onClose }) => {
  const {
    isLoading,
    isSyncing,
    progress,
    currentCategory,
    categoriesToUpdate,
    lastSyncTime,
    storageInfo,
    error,
    sync,
    checkForUpdates,
    clearContent,
  } = useContentSync();

  const [showDetails, setShowDetails] = useState(false);

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return "未设置";
    return new Date(date).toLocaleString("zh-CN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSync = async () => {
    await sync();
    Alert.alert("完成", "内容同步完成!");
  };

  const handleClear = () => {
    Alert.alert("删除内容", "您确定要删除所有已下载的内容吗？", [
      { text: "取消", style: "cancel" },
      {
        text: "删除",
        style: "destructive",
        onPress: async () => {
          await clearContent();
          Alert.alert("完成", "已删除所有内容");
        },
      },
    ]);
  };

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="mt-2 text-gray-600">正在加载...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="mb-4">
        <Text className="text-xl font-bold text-gray-900">内容同步</Text>
        <Text className="text-sm text-gray-500">管理离线学习内容</Text>
      </View>

      {error && (
        <View className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <Text className="text-red-600 text-sm">{error}</Text>
        </View>
      )}

      <View className="mb-4 p-4 bg-gray-50 rounded-lg">
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-600">需要更新的类别:</Text>
          <Text className="font-semibold text-blue-600">
            {categoriesToUpdate}
          </Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-600">大小:</Text>
          <Text className="font-semibold">{formatBytes(storageInfo.used)}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600">最后同步时间:</Text>
          <Text className="font-semibold">{formatDate(lastSyncTime)}</Text>
        </View>
      </View>

      {isSyncing && (
        <View className="mb-4">
          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-600">正在加载...</Text>
            <Text className="text-gray-600">{Math.round(progress)}%</Text>
          </View>
          <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <View
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </View>
          <Text className="mt-1 text-sm text-gray-500">{currentCategory}</Text>
        </View>
      )}

      <TouchableOpacity
        className={`p-4 rounded-lg mb-3 ${
          isSyncing || categoriesToUpdate === 0 ? "bg-gray-300" : "bg-blue-500"
        }`}
        onPress={handleSync}
        disabled={isSyncing || categoriesToUpdate === 0}
      >
        <Text className="text-white text-center font-semibold">
          {isSyncing
            ? "正在同步..."
            : categoriesToUpdate === 0
              ? "没有更新"
              : "立即同步"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="p-4 rounded-lg mb-3 border border-gray-300"
        onPress={checkForUpdates}
        disabled={isSyncing}
      >
        <Text className="text-gray-700 text-center">检查更新</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="p-4 rounded-lg mb-3 border border-red-300"
        onPress={handleClear}
        disabled={isSyncing}
      >
        <Text className="text-red-600 text-center">删除所有内容</Text>
      </TouchableOpacity>

      {storageInfo.categories.length > 0 && (
        <View className="mt-4">
          <TouchableOpacity
            className="flex-row justify-between items-center p-2"
            onPress={() => setShowDetails(!showDetails)}
          >
            <Text className="font-semibold text-gray-700">
              类别 ({storageInfo.categories.length})
            </Text>
            <Text className="text-gray-500">{showDetails ? "-" : "+"}</Text>
          </TouchableOpacity>

          {showDetails && (
            <View className="pl-2">
              {storageInfo.categories.map((cat) => (
                <Text key={cat} className="text-gray-600 py-1">
                  - {cat}
                </Text>
              ))}
            </View>
          )}
        </View>
      )}

      {onClose && (
        <TouchableOpacity className="mt-4 p-3" onPress={onClose}>
          <Text className="text-center text-gray-500">关闭</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default ContentSyncUI;
