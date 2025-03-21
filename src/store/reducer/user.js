import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PHONE,
  UPDATE_ADDRESS
} from '../actions/user'

const initialState = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  address: '123 Main St, Anytown, USA'
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME: 
      return {
        ...state,
        name: action.payload
      }
    case UPDATE_EMAIL:
      return {
        ...state,
        email:  action.payload
      }
    case UPDATE_PHONE:
      return {
       ...state,
        phone: action.payload
      }
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload
      }
    default:
      return state
  }
}

export default userReducer