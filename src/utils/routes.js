import {
    Route
  } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

  export const routes = [
    {
      path: "/",
      exact: true,
      component: Home
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