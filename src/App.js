import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';

//  Middlewares
import Auth from './middlewares/Auth';
import NotAuth from './middlewares/NotAuth';
import IsAdmin from './middlewares/IsAdmin';
import IsUser from './middlewares/IsUser';

//  Pages
import Dashboard from './interfaces/admin/pages/dashboard';
import Login from './interfaces/general/pages/login';
import Page404 from './interfaces/general/pages/404';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <NotAuth exact path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} />

            {/* Admin Routes */}
            <IsAdmin exact path="/admin" component={Dashboard} />
            <IsAdmin exact path="/admin/dashboard" component={Dashboard} />

             {/* User Routes */}
            <IsUser exact path="/user" component={Dashboard} />
            <IsUser exact path="/user/dashboard" component={Dashboard} />

            <Page404 />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
