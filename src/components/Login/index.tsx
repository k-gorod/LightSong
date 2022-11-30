import React, { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser, signInUser, updateUser } from "../../redux/actions/user.actions"

import styles from './login.module.scss'

const Login: FC = (data: any) => {
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    login: '',
    password: ''
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setUser((pre: any) => {
      return ({
        ...pre,
        [name]: value
      })
    })
  }

  const handleClick = () => {
    dispatch(signInUser({
      login: user.login,
      password: user.password,
    }))
  }

  return (
    <div className={styles['login-form']}>
      <label htmlFor="login">Login</label>
      <input onChange={handleChange} name="login" id="login" placeholder='Login'/>
      <label htmlFor="password">Password</label>
      <input onChange={handleChange} name="password" id="password" placeholder='Password'/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default React.memo(Login)
