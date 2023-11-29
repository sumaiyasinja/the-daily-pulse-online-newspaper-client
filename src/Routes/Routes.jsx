import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllArticles from "../pages/Articales/AllArticles";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allArticles",
        element: <AllArticles />,
      },
     
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
    ],
  },
  ]);
  export default router;