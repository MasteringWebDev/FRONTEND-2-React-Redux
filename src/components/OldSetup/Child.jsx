import React from 'react'
import GrandChild from './GrandChild'

const styles = {
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px'
  }
}

const Child = ({ count, setCount }) => {
  return (
    <div style={styles.container}>
      <h2>Child</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <GrandChild count={count} setCount={setCount} />
    </div>
  )
}

export default Child