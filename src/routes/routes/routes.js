import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <></>,
      },
      {
        path: "home",
        element: <></>,
      },
    ],
  },
]);

export default router;
