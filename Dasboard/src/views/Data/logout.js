import React from 'react'
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  const navigate = useNavigate()
  const signOut = useSignOut()

  // navigate('/admin/login')
  return signOut()
}
export default Logout
