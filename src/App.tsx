import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Order } from "./pages/Order/Order";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/order", element: <Order /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
