import { createStore, combineReducers } from 'redux'
import counterReducer from './reducer/counter'
import userReducer from './reducer/user'
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})

const store = createStore(rootReducer, composeWithDevTools())
export default store