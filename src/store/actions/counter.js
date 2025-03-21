// Action type constants
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// Action creators: Functions which return action objects
export const incrementCount = () => ({
  type: INCREMENT
})

export const decrementCount = () => ({
  type: DECREMENT
})