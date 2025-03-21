import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from '../actions/users'

const initialState = {
  loading: false,
  data: [],
  error: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED: 
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default usersReducer