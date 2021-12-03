import Dashboard from "screens/dashboard";
import Products from "screens/products";

const Routes = [
  {
    path: "/",
    key: "/",
    exact: true,
    render: () => <Dashboard />,
  },
  {
    path: "/products",
    key: "/products",
    component: Products,
  },
];

export default Routes;
