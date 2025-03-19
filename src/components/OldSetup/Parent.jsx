import { useState } from 'react'
import Child from './Child'
const styles = {
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px'
  }
}

function Parent() {
  const [count, setCount] = useState(0)

  return (
    <div style={styles.container}>
      <h1>Parent</h1>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
      >Increment</button>
      <Child count={count} setCount={setCount} />
    </div>
  )
}

export default Parent