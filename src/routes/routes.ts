import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Grid from "../pages/Grid";
import Form from "../pages/Form";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/grid",
    Component: Grid,
  },
   {
    path: "/form",
    Component: Form,
  },
]);