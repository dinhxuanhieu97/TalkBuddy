import { createBrowserRouter } from "react-router";
import { Onboarding } from "./components/Onboarding";
import { MainApp } from "./components/MainApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Onboarding,
  },
  {
    path: "/app",
    Component: MainApp,
  },
]);
