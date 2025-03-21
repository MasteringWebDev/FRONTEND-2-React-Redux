import { createStore } from 'redux'
import counterReducer from './reducer/counter'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(counterReducer, composeWithDevTools())
export default store