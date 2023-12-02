import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllArticles from "../pages/Articales/AllArticles";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import AddArticles from "../pages/Articales/AddArticles";
import Subscription from "../pages/Subscription/Subscription";
import Dashboard from "../Layout/Dashboard";
import MyArticles from "../pages/Articales/MyArticles";
import ArticleDetails from './../pages/Articales/ArticleDetails';
import AboutUs from './../pages/AboutUs/AboutUs';
import AddPublisher from './../components/Publishers/AddPublisher';
import AdminRoute from './AdminRoute';


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
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/allArticles",
        element: <AllArticles />,
      },
      {
        path: "/article/:id",
        element: <PrivateRoute><ArticleDetails /></PrivateRoute>,
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
        path: "/addArticle",
        element: <PrivateRoute><AddArticles></AddArticles></PrivateRoute>
      },
      {
        path: "/subscription",
        element: <PrivateRoute><Subscription></Subscription></PrivateRoute>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: "/myArticles,",
        element: <PrivateRoute><MyArticles></MyArticles></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },

          {
            path: "/addPublisher",
            element: <PrivateRoute><AdminRoute><AddPublisher /></AdminRoute></PrivateRoute>
          },
      
      
    ],
  },
  ]);
  export default router;