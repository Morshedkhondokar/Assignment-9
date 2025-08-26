import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Donate from "../pages/Donate";
import Blog from "../pages/Blogs";
import SuccessStoryDetail from "../pages/SuccessStoryDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../Layout/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
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
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ],
  },
]);
export default router;
