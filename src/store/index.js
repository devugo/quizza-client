import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/auth';
// import cartReducer from './reducers/cart';

export const rootReducer = combineReducers({
    auth: authReducer
});

export const middlewares = [ReduxThunk];

const composeEnhancers = composeWithDevTools({});

export const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(rootReducer);