import "./styles/app.css";
import Home from "./pages/home";
import Revelation from "./pages/revelation";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorBoundary from "./components/Errors/ErrorBoundary";
import ErrorElement from "./components/Errors/ErrorElement";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
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
          <ErrorBoundary name="Home">
            <Home />
          </ErrorBoundary>
        ),
      },
      {
        path: "revelation",
        element: (
          <ErrorBoundary name="Revelation">
            <Revelation />
          </ErrorBoundary>
        ),
        // async lazy() {
        //   let Revelation = await import("./pages/revelation");
        //   return { Component: Revelation };
        // },
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load... skeleton will be added soon</p>}
      />
    </div>
  );
}

export default App;
