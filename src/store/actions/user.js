// Action type constants
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

// Action creators: Functions which return action objects
export const updateName = () => ({
  type: UPDATE_NAME
})

export const updateEmail = () => ({
  type: UPDATE_EMAIL
})

export const updatePhone = () => ({
  type: UPDATE_PHONE
})

export const updateAddress = () => ({
  type: UPDATE_ADDRESS
})