// Action type constants
export const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// Action creators: Functions which return action objects
export const fetchUsersRequested = () => ({
  type: FETCH_USERS_REQUESTED
})

export const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
})

export const fetchUsersFailed = (error) => ({
  type: FETCH_USERS_FAILED,
  payload: error.message
})

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequested())
      const res = await fetch('https://reqres.in/api/users')
      const jsonRes = await res.json()
      dispatch(fetchUsersSuccess(jsonRes.data))
    } catch (error) {
      console.log(error)
      dispatch(fetchUsersFailed(error))
    }
  }
}

/*
  - fetchUsers action creator
    - Successful scenario
      - fetchUsersRequested
        - loading: true
      - fetchUsersSuccess
        - loading: false
        - data: usersData
    - Failed scenario
      - fetchUsersRequested
        - loading: true
      - fetchUsersFailed
        - loading: false
        - error: errorMessage
*/