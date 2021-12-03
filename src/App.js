import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "components/header";
import Footer from "components/common/footer";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map((routeProps) => {
          return <Route {...routeProps} />;
        })}
        <Redirect to="404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
