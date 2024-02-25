//Routes.tsx
import { RouteObject, useRoutes } from "react-router-dom";

import { RouteWrapper } from "./RouteWrapper";

import { Error404 } from "../pages/Error404/Error404";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { ResetPassword } from "../pages/ResetPassword/ResetPassword";
import AddRecipe from "../pages/AddRecipe/AddRecipe";
import Favorites from "../components/Favorites";

import FavoriteRecipes from "../pages/FavoriteRecipes/FavoriteRecipes";

export enum RouteType {
  PUBLIC,
  PRIVATE,
  GUEST,
}

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RouteWrapper routeType={RouteType.PUBLIC}>
        <Home />
      </RouteWrapper>
    )
  },
  {
    path: "add-recipe",
    element: (
      <RouteWrapper routeType={RouteType.PRIVATE}>
        <AddRecipe />
      </RouteWrapper>
    )
  },
  {
    path: "update-recipe/:recipeId",
    element: (
      <RouteWrapper routeType={RouteType.PRIVATE}>
        <AddRecipe />
      </RouteWrapper>
    )
  },
  {
    path: "favorites",
    element: (
      <RouteWrapper routeType={RouteType.PRIVATE}>
        <FavoriteRecipes />
      </RouteWrapper>
    ),
  },

  {
    path: "/login",
    element: (
      <RouteWrapper routeType={RouteType.PUBLIC}>
        <Login />
      </RouteWrapper>
    ),
  },
  {
    path: "/register",
    element: (
      <RouteWrapper routeType={RouteType.PUBLIC}>
        <Register />
      </RouteWrapper>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <RouteWrapper routeType={RouteType.PUBLIC}>
        <ResetPassword />
      </RouteWrapper>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export const Routes = () => {
  const routes = useRoutes(appRoutes);

  return routes;
};
