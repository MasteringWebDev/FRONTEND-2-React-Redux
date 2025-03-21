import GrandChild from './GrandChild'
import { useSelector } from 'react-redux'

const styles = {
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px'
  }
}

const Child = () => {
  const count = useSelector((state) => state.counter.count)

  return (
    <div style={styles.container}>
      <h2>Child</h2>
      <p>Count: {count}</p>
      <GrandChild />
    </div>
  )
}

export default Child