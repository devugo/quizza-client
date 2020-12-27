import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';

//  Middlewares
import Auth from './middlewares/Auth';
import NotAuth from './middlewares/NotAuth';

//  Pages
import Dashboard from './interfaces/admin/pages/dashboard';
import Login from './interfaces/general/pages/login';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <NotAuth exact path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} />

            {/* Admin Routes */}
            <Auth exact path="/admin" component={Dashboard} />
            <Auth exact path="/admin/dashboard" component={Dashboard} />

             {/* Admin Routes */}
            <Auth exact path="/user" component={Dashboard} />
            <Auth exact path="/user/dashboard" component={Dashboard} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
