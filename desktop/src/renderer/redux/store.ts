// Redux docs: http://redux.js.org/
// Typed redux: https://github.com/piotrwitek/react-redux-typescript-guide#create-store
import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import createHistory from "history/createBrowserHistory"
import { routerReducer, routerMiddleware } from "react-router-redux"

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Store instance
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({
    routerReducer
  }),
  composeEnhancers(applyMiddleware(middleware)),
)

export default store