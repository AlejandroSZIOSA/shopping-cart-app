import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { DetailsPage } from "./pages/Details/Details";
import { CheckoutPage } from "./pages/Checkout/Checkout";

function App() {
  const router = createBrowserRouter([
    { path: "/", index: true, element: <HomePage /> },
    { path: "/details/:id", element: <DetailsPage /> },
    { path: "/checkout", element: <CheckoutPage /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
