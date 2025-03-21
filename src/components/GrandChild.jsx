import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT } from '../store/actions/counter'

const styles = {
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px'
  }
}

const GrandChild = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div style={styles.container}>
      <h2>GrandChild</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => dispatch({ type: INCREMENT })}
      >
        Increment
      </button>
    </div>
  )
}

export default GrandChild