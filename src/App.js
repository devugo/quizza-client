import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
