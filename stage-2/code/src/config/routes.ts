import Pages from "pages";
import constants from "config/constants";

const routes = [
  {
    path: constants.ROUTES.HOME,
    exact: true,
    component: Pages.Home
  },
  {
    path: constants.ROUTES.LOGIN,
    exact: true,
    component: Pages.Login
  }
];

export default routes;
