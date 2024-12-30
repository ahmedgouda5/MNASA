import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Onboarding from "./pages/auth/Onboarding";
import OnboardingTwo from "./pages/auth/OnboardingTwo";
import Signup from "./pages/auth/Signup";
import ProtectRoute from "./components/layout/ProtectRoute";
import Home from "./pages/app/Home";
import Login from "./pages/auth/Login";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"Home",
          element: (
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          ),
        },
        { index: "true", element: <Onboarding /> },
        { path: "/OnboardingTwo", element: <OnboardingTwo/> },
        
      
      ],
    },
    {
      path: "/auth",
      element: <Layout />,
      children: [
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
    
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
