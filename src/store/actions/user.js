// Action type constants
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

// Action creators: Functions which return action objects
export const updateName = (updateText) => ({
  type: UPDATE_NAME,
  payload: updateText
})

export const updateEmail = (updateText) => ({
  type: UPDATE_EMAIL,
  payload: updateText
})

export const updatePhone = (updateText) => ({
  type: UPDATE_PHONE,
  payload: updateText
})

export const updateAddress = (updateText) => ({
  type: UPDATE_ADDRESS,
  payload: updateText
})