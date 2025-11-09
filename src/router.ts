import Root from "./pages";
import DRoot from "./pages/dashboard/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Update from "./pages/update";
import Auth from "./pages/auth";
import Logout from "./pages/auth/logout";
import Events from "./pages/events";
import Create from "./pages/events/create";
import Event from "./pages/events/event";
import Checkout from "./pages/events/event/checkout";
import Dashboard from "./pages/dashboard";
import DTickets from "./pages/dashboard/tickets";
import DEvents from "./pages/dashboard/events";
import Settings from "./pages/dashboard/settings";
import SEmail from "./pages/dashboard/settings/email";
import SPayment from "./pages/dashboard/settings/payment";
import SAccount from "./pages/dashboard/settings/accounts";
import SPreference from "./pages/dashboard/settings/preferences";
import SData from "./pages/dashboard/settings/data";
import SDelete from "./pages/dashboard/settings/delete";
import NotFound from "./pages/404";

import AuthMiddleware from "./middleware/auth.middleware";
import Privacy from "./pages/privacy";
import Academy from "./pages/academy";
import Terms from "./pages/terms";
import Careers from "./pages/careers";

import { createBrowserRouter } from "react-router";
import Partners from "./pages/partners";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/update", Component: Update },
      { path: "/acedemy", Component: Academy },
      { path: "/about", Component: About },
      { path: "/partnership", Component: Partners },
      { path: "/careers", Component: Careers },
      { path: "/privacy", Component: Privacy },
      { path: "/terms", Component: Terms },
      {
        path: "events",
        children: [
          { index: true, Component: Events },
          { path: "create", Component: Create },
        ],
      },
      { path: "events/:event", Component: Event },
      { path: "events/:event/checkout", Component: Checkout },
    ],
  },
  {
    path: "/auth",
    children: [
      { index: true, Component: Auth },
      { path: "logout", Component: Logout },
    ],
  },
  {
    path: "/dashboard",
    // loader: AuthMiddleware,
    Component: DRoot,
    children: [
      { index: true, Component: Dashboard },
      { path: "tickets", Component: DTickets },
      { path: "events", children: [{index: true, Component: DEvents},{path: ":event_id" , Component: DEvents},] },
      {
        path: "settings",
        children: [
          { index: true, Component: Settings },
          { path: "email", Component: SEmail },
          { path: "payment", Component: SPayment },
          { path: "accounts", Component: SAccount },
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
