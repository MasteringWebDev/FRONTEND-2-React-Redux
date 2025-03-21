import { useState } from 'react'
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
  const [updateText, setUpdateText] = useState('')

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <input 
          type="text" 
          placeholder="Enter name/email/phone/address" 
          value={updateText}
          onInput={(e) => setUpdateText(e.target.value)}
        />
        <button
          onClick={() => dipatch(updateName(updateText))}
        >Update name</button>
        <button
          onClick={() => dipatch(updateEmail(updateText))}
        >Update email</button>
        <button
          onClick={() => dipatch(updatePhone(updateText))}
        >Update phone</button>
        <button
          onClick={() => dipatch(updateAddress(updateText))}
        >Update address</button>
      </div>
    </div>
  )
}

export default User