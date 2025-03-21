import { useSelector, useDispatch } from "react-redux"
import {
  updateName,
  updateEmail,
  updatePhone,
  updateAddress,
} from '../store/actions/user'

const User = () => {
  const user = useSelector((state) => state.user)
  const dipatch = useDispatch()

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>

      <div>
        <button
          onClick={() => dipatch(updateName())}
        >Update name</button>
        <button
          onClick={() => dipatch(updateEmail())}
        >Update email</button>
        <button
          onClick={() => dipatch(updatePhone())}
        >Update phone</button>
        <button
          onClick={() => dipatch(updateAddress())}
        >Update address</button>
      </div>
    </div>
  )
}

export default User