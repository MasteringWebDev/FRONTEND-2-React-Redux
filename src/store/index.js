import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from './reducer/counter'
import userReducer from './reducer/user'
import usersReducer from './reducer/users'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  users: usersReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store