import { createBrowserRouter } from "react-router";
import Root from "./pages";
import DRoot from "./pages/dashboard/layout";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Events from "./pages/events";
import Event from "./pages/events/event";
import Checkout from "./pages/events/event/checkout";
import Dashboard from "./pages/dashboard";
import DTickets from "./pages/dashboard/tickets";
import DEvents from "./pages/dashboard/events";
import SEmail from "./pages/dashboard/settings/email";
import SPayment from "./pages/dashboard/settings/payment";
import SAccount from "./pages/dashboard/settings/accounts";
import SPreference from "./pages/dashboard/settings/preferences";
import SData from "./pages/dashboard/settings/data";
import SDelete from "./pages/dashboard/settings/delete";
import NotFound from "./pages/404";

import AuthMiddleware from "./middleware/auth.middleware";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "events", Component: Events },
      { path: "events/:event", Component: Event },
      { path: "events/:event/checkout", Component: Checkout },
    ],
  },
  {
    path: "/auth",
    children: [{ index: true, Component: Auth }],
  },
  {
    path: "/dashboard",
    loader: AuthMiddleware,
    Component: DRoot,
    children: [
      { index: true, Component: Dashboard },
      { path: "tickets", Component: DTickets },
      { path: "events", Component: DEvents },
      {
        path: "settings",
        children: [
          { path: "email", Component: SEmail },
          { path: "payment", Component: SPayment },
          { path: "account", Component: SAccount },
          { path: "preferences", Component: SPreference },
          { path: "data", Component: SData },
          { path: "delete", Component: SDelete },
        ],
      },
      { index: true, Component: Dashboard },
      { index: true, Component: Dashboard },
    ],
  },
  { path: "*", Component: NotFound },
]);

export default router;
