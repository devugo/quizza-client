import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';

import Dashboard from './interfaces/admin/pages/dashboard';
import Login from './interfaces/general/pages/login';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
