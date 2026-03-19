import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center overflow-auto">
      <div
        style={{ width: 393, height: 852, position: "relative", overflow: "hidden" }}
        className="bg-white shadow-2xl rounded-[40px]"
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
