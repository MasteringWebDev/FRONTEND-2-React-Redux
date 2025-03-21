import './App.css'
import Child from './components/Child'
import User from './components/User'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount } from './store/actions/counter'

const styles = {
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px'
  }
}

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <div style={styles.container}>
        <h1>Parent</h1>
        <p>Count: {count}</p>
        <button
          onClick={() => dispatch(incrementCount())}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrementCount())}
        >
          Decrement
        </button>
        <Child />
      </div>
      <User />
    </>
  )
}

export default App

/*
  # Props drilling:
    - States and state handlers need to be drilled down through the component hierarchy till that nested component which requires access to the state and/or state handler. Sometimes, due to this the props have to pass through those components as well which might not require access to these state and state handlers.

    - Explore
      - Lifting the state up (Another similar problem)

    - To solve both of these problems, we need access to a 'central state', which can be provided by 'Redux'

  # Redux:
    - A central store for React application
      - Components can 'subscribe' to this store to get notified on state changes

    - Reducer function: A function which returns updated state based on action types
      - Define the initial state, and assign it as the default value to state parameter
      - List down rules to update state based on action types
      - Has 2 parameters
        - state: The current state object
        - action: An object with 'type' property

    - Action: An object with 'type' property which is intended to perform an update on the state based on the rule written in the reducer function
      - Components can 'dispatch' these actions using event handlers

  # Steps to work with redux store in react app
    - Install: npm i redux react-redux
    - Create:
      - Create a reducer function, initial state
      - Pass reducer function as an argument to createStore method to create a store and export it
    - Connect Redux store with React app
      - import redux store in App.jsx and pass it as props to Provider component. Provider component is an HOC offered by 'react-redux' package which will wrap App component and provide access to redux store
    - Access and update redux state in react components
      - Acccess:
        - 'useSelector' hook can be used to select a specific state from the redux store
          - This hook is offered by 'react-redux' package
      - Update:
        - 'useDispatch' hook can be used to get access to the dispatch method, which can further be used to dipatch the action objects to perform state updates

  # Reference:
    - Redux: http://redux.js.org/
    - React-redux: https://react-redux.js.org/
    - Redux devtools extension:
      - npm package: https://www.npmjs.com/package/@redux-devtools/extension
      - chrome extension: https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
*/