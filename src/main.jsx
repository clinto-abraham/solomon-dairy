import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// import App from "./app";

const App = lazy(() => import("./app"));
import LayoutSkeleton from "./components/skeletons/layoutSkeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Suspense fallback={<LayoutSkeleton />}>
      <App />
    </Suspense>
  </>
);
