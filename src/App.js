import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';

import Dashboard from './interfaces/admin/pages/dashboard';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
