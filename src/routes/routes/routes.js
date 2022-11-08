import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllRecipes from "../../Pages/AllRecipes/AllRecipes";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import RecipeDetails from "../../Pages/RecipeDetails/RecipeDetails";
import Register from "../../Pages/Register/Register";

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
        loader: () => fetch("http://localhost:5000/api/v1/recipes"),
      },
      {
        path: "recipes/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/recipes/${params.id}`),
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
    ],
  },
]);

export default router;
