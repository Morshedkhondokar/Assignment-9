import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Donate from "../pages/Donate";
import Blog from "../pages/Blogs";
import SuccessStoryDetail from "../pages/SuccessStoryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donate",
        element: <Donate></Donate>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      { 
        path: "/blog/success-story/:id", 
        element: <SuccessStoryDetail /> 
      },
    ],
  },
]);
export default router;
