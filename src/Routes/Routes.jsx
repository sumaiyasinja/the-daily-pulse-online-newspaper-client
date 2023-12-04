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
import TrendingNewsFilter from './../components/TrendingNewsFilter';
import ManageUsers from "../pages/AdminDashboard/ManageUsers";
import ManageAricles from "../pages/AdminDashboard/ManageAricles";
import DashboardHome from "../pages/AdminDashboard/DashboardHome";
import PremiumArticles from "../pages/Articales/PremiumArticles";
import UpdateArticle from "../pages/Articales/UpdateArticle";


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
        path: "/myArticles",
        element: <PrivateRoute><MyArticles></MyArticles></PrivateRoute>
      },
      {
        path: "/UpdateArticle/:id",
        element: <PrivateRoute><UpdateArticle></UpdateArticle></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: "/trendingNews",
        element: <PrivateRoute><TrendingNewsFilter></TrendingNewsFilter></PrivateRoute>
      },   
      {
        path: "/premiumArticles",
        element: <PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>
      },   
      
    ],
  },
      {
        path: "/dashboard",
        element: <PrivateRoute><AdminRoute><Dashboard /></AdminRoute></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: "/dashboard/home",
          element: <PrivateRoute><AdminRoute><DashboardHome /></AdminRoute></PrivateRoute>
        },
        {
          path: "/dashboard/addPublisher",
          element: <PrivateRoute><AdminRoute><AddPublisher /></AdminRoute></PrivateRoute>
        },

        {
          path: '/dashboard/manageUsers',
          element: <PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivateRoute>
        },
        {
          path: '/dashboard/manageAricles',
          element: <PrivateRoute><AdminRoute><ManageAricles></ManageAricles></AdminRoute></PrivateRoute>
        }

      ]
    }
  
  ]);
  export default router;