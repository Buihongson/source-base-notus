import { PATH_NAME } from "configs/pathName";
import React, { Fragment, lazy, Suspense } from "react";
import { Routes as Routers, Route, Navigate } from "react-router-dom";

import Admin from "layouts/Admin";
import Auth from "layouts/Auth";

// Modules
const Index = lazy(() => import("views/Index"));
const Profile = lazy(() => import("views/Profile"));
const Landing = lazy(() => import("views/Landing"));
const Dashboard = lazy(() => import("views/admin/Dashboard"));
const Maps = lazy(() => import("views/admin/Maps"));
const Settings = lazy(() => import("views/admin/Settings"));
const Tables = lazy(() => import("views/admin/Tables"));
const Login = lazy(() => import("views/auth/Login"));
const Register = lazy(() => import("views/auth/Register"));

const routesConfig = [
  {
    path: "/*",
    element: Index,
  },
  {
    path: "/profile",
    element: Profile,
  },
  {
    path: "/lading",
    element: Landing,
  },
  {
    path: "/admin/*",
    layout: Admin,
    children: [
      {
        path: PATH_NAME.ADMIN_DASHBOARD,
        element: Dashboard,
        requireRoles: [],
      },
      {
        path: PATH_NAME.ADMIN_MAPS,
        element: Maps,
        requireRoles: [],
      },
      {
        path: PATH_NAME.ADMIN_SETTINGS,
        element: Settings,
        requireRoles: [],
      },
      {
        path: PATH_NAME.ADMIN_TABLES,
        element: Tables,
        requireRoles: [],
      },
      {
        path: "*",
        element: () => (
          <Navigate to={`/admin/${PATH_NAME.ADMIN_DASHBOARD}`} replace />
        ),
      },
    ],
  },
  {
    path: "/auth/*",
    layout: Auth,
    children: [
      {
        path: PATH_NAME.AUTH_LOGIN,
        element: Login,
        requireRoles: [],
      },
      {
        path: PATH_NAME.AUTH_REGISTER,
        element: Register,
        requireRoles: [],
      },
      {
        path: "*",
        element: () => (
          <Navigate to={`/auth/${PATH_NAME.AUTH_LOGIN}`} replace />
        ),
      },
    ],
  },
];

const getNestedRoute = (routes) => {
  return routes?.map((item, index) => {
    const Component = item.element;

    return (
      <Route
        key={`routes-child-${index}`}
        path={item.path}
        element={<Component />}
      />
    );
  });
};

const renderRoutes = (routes) => {
  return (
    <>
      {routes ? (
        <Suspense fallback={<div />}>
          <Routers>
            {routes.map((route, idx) => {
              const Guard = route.guard || Fragment;
              const Layout = route.layout || Fragment;
              const Component = route.element;
              const requireRoles = route.requireRoles || [];

              return (
                <Route
                  key={`routes-${idx}`}
                  path={route.path}
                  element={Component ? <Component /> : <Layout />}
                >
                  {getNestedRoute(route?.children)}
                </Route>
              );
            })}
          </Routers>
        </Suspense>
      ) : null}
    </>
  );
};

const Routes = () => {
  return renderRoutes(routesConfig);
};

export default Routes;
