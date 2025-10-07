import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Grid from "../pages/Grid";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/grid",
    Component: Grid,
  },
]);