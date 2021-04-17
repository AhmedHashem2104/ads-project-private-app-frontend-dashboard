import {
    Route
  } from "react-router-dom";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import Home from "../pages/Home";
import Login from "../pages/Login";
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
      path: "/login",
      component: Login
    },
    // {
    //   path: "/tacos",
    //   component: Tacos,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
    // }
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