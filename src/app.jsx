import "./styles/app.css";
// import Home from "./pages/home";
// import Revelation from "./pages/revelation";
// import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorBoundary from "./components/Errors/ErrorBoundary";
import ErrorElement from "./components/Errors/ErrorElement";
import LayoutSkeleton from "./components/skeletons/layoutSkeleton";
import BasicSpeedDial from "./components/SpeedDial";
import MiniDrawer from "./components/sidebar";
const Revelation = lazy(() => import("./pages/revelation"));
const Home = lazy(() => import("./pages/home"));

function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      <MiniDrawer childrenComp={<Outlet />} />
      {/* <div className="container">
        <Outlet />
      </div> */}
      <BasicSpeedDial />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary name="Layout">
        <Layout />
      </ErrorBoundary>
    ),
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LayoutSkeleton />}>
            <ErrorBoundary name="Home">
              <Home />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: "revelation",
        element: (
          <Suspense fallback={<LayoutSkeleton />}>
            <ErrorBoundary name="Revelation">
              <Revelation />
            </ErrorBoundary>
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Suspense fallback={<LayoutSkeleton />}>
        <RouterProvider router={router} fallbackElement={<LayoutSkeleton />} />
      </Suspense>
    </div>
  );
}

export default App;
