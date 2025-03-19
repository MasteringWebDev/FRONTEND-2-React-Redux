import React from 'react'
const styles = {
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px'
  }
}

const GrandChild = ({ count, setCount }) => {
  return (
    <div style={styles.container}>
      <h2>GrandChild</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default GrandChild