import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from "react-router-dom";
import './stylesheets/index.css';
import { createBrowserHistory } from "history";
import { NavBar } from './components/NavBar';
import { routes } from './Routes';
import { Home } from './Home';
import { Gallery } from './Gallery';

import { Modal } from './modal/Modal';
import { useModal } from './modal/useModal';
import { LoginModal } from './LoginModal';




let history = createBrowserHistory();
//const gateway = new AxiosGateway()
const routing = (
  <>
  <Router history={history}>
    <NavBar />
        <Route
          path={routes.Home}
          render={(props) => <Home {...props} />}
        />
        <Route
          path={routes.Gallery}
          render={(props) => <Gallery {...props} />}
        />
        <Route
          path={routes.Login}
          render={(props) => <LoginModal {...props} />}
        />

  </Router>
  </>
)

ReactDOM.render(routing, document.getElementById("root"));
