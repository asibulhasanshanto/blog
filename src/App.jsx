import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import EtheriumBlogs from "./pages/bn/etherium/EtheriumBlogs";
// lazy load WhatIsBlockchain
import React, { lazy, Suspense } from "react";
const WhatIsBlockchain = lazy(() =>
  import("./pages/bn/etherium/1.what_is_blockchain/WhatIsBlockchain")
);

const router = createBrowserRouter([
  {
    path: "/blog",
    element: <Navigate to={"/blog/bn"} />,
  },
  {
    path: "/blog/bn",
    // element: <Home />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "web3_etherium_solidity",

        children: [
          {
            path: "",
            element: <EtheriumBlogs />,
          },
          {
            path: "what_is_blockchain",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <WhatIsBlockchain />
              </Suspense>
            ),
          },
        ],
      },
    ],
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
