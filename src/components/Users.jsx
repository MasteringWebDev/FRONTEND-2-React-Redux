import { useEffect } from 'react'
import { fetchUsers } from '../store/actions/users'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
  const users = useSelector((state) => state.users.data)
  const loading = useSelector((state) => state.users.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.first_name} {user.last_name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Users