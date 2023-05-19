import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/blog",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
