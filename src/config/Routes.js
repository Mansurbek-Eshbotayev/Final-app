import React from "react";

export const routes = [
  {
    key: "",
    path: "/buyurtmalar",
    component: React.lazy(() => import("../pages/Orders")),
  },
  {
    key: "",
    path: "/texnologiyalar",
    component: React.lazy(() => import("../pages/Technology")),
  },
  {
    key: "",
    path: "/mahsulotlar",
    component: React.lazy(() => import("../pages/Products")),
  },
  {
    key: "",
    path: "/customers",
    component: React.lazy(() => import("../pages/Customers")),
  },
  {
    key: "",
    path: "/toifalar",
    component: React.lazy(() => import("../pages/Category")),
  },
  {
    key: "",
    path: "/manzil",
    component: React.lazy(() => import("../pages/Location")),
  },
  {
    key: "",
    path: "/carousel",
    component: React.lazy(() => import("../pages/Carousel")),
  },
];
