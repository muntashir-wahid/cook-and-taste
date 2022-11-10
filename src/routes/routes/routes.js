import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddRecipe from "../../Pages/AddRecipe/AddRecipe";
import AllRecipes from "../../Pages/AllRecipes/AllRecipes";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import RecipeDetails from "../../Pages/RecipeDetails/RecipeDetails";
import Register from "../../Pages/Register/Register";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import UserReviews from "../../Pages/UserReviews/UserReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "recipes",
        element: <AllRecipes />,
        loader: () =>
          fetch("https://cook-and-taste-server.vercel.app/api/v1/recipes"),
      },
      {
        path: "recipes/:id",
        loader: ({ params }) =>
          fetch(
            `https://cook-and-taste-server.vercel.app/api/v1/recipes/${params.id}`
          ),
        element: <RecipeDetails />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "my-reviews/:uid",
        element: (
          <PrivateRoute>
            <UserReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "update-review/:id",
        loader: ({ params }) =>
          fetch(
            `https://cook-and-taste-server.vercel.app/api/v1/review/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
