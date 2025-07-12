import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Register, Login } from "./pages";
import RootLayout from "./layouts/RootLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
