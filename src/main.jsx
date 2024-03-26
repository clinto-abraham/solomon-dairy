import "./styles/index.css";
import ReactDOM from "react-dom/client";
import App from "./app";

ReactDOM.createRoot(
  document.getElementById("root")
  ).render(<App />);

// import { Suspense, lazy } from "react";
// const App = lazy(() => import("./app"));
// import LayoutSkeleton from "./components/skeletons/layoutSkeleton";