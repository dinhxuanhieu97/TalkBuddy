import { createRoot } from "react-dom/client";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import App from "./app/index";
import "./styles/index.css";

function Root() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <App />
      </View>
    </SafeAreaProvider>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
