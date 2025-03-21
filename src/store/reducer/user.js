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
        name: 'Kiran Nyayapati'
      }
    case UPDATE_EMAIL:
      return {
        ...state,
        email: 'kiran@example.com'
      }
    case UPDATE_PHONE:
      return {
       ...state,
        phone: '987-654-3210'
      }
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: '456 Elm St, Anytown, USA'
      }
    default:
      return state
  }
}

export default userReducer