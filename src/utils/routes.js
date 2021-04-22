import {
    Route
  } from "react-router-dom";
import AddCategory from "../pages/AddCategory";
import AddCountry from "../pages/AddCountry";
import AddUser from "../pages/AddUser";
import Categories from "../pages/Categories";
import Countries from "../pages/Countries";
import EditCategory from "../pages/EditCategory";
import EditCountry from "../pages/EditCountry";
import EditUser from "../pages/EditUser";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ShowCategory from "../pages/ShowCategory";
import ShowUser from "../pages/ShowUser";
import Users from "../pages/Users";

  export const routes = [
    {
      path: "/",
      exact: true,
      component: Home
    },
    {
      path: "/users",
      component: Users
    },
    {
      path: "/user/add",
      component: AddUser
    },
    {
      path: "/user/edit/:id",
      component: EditUser
    },
    {
      path: "/user/:id",
      component: ShowUser
    },
    {
      path: "/categories",
      component: Categories
    },
    {
      path: "/category/add",
      component: AddCategory
    },
    {
      path: "/category/edit/:id",
      component: EditCategory
    },
    {
      path: "/category/:id",
      component: ShowCategory
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/countries",
      component: Countries
    },
    {
      path: "/country/add",
      component: AddCountry
    },
    {
      path: "/country/edit/:id",
      component: EditCountry
    },
  ];

  export function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }