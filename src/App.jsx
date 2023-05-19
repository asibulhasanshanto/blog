import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/blog",
    element: <Navigate to={"/blog/bn"} />,
  },
  {
    path: "/blog/bn",
    element: <Home />,
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
