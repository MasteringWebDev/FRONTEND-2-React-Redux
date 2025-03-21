// Action type constants
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_CUSTOM = 'INCREMENT_CUSTOM'

// Action creators: Functions which return action objects
export const incrementCount = () => ({
  type: INCREMENT
})

export const decrementCount = () => ({
  type: DECREMENT
})

export const incrementCustomCount = (number) => ({
  type: INCREMENT_CUSTOM,
  payload: parseInt(number)
})