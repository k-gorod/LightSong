import Link from 'next/link'
import React, { FC, memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { registerUser } from '../redux/actions/userActions'
import styles from '../styles/pages/home.module.scss'

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
    dispatch(registerUser({
      login: user.login,
      password: user.password
    }))
  }

  useEffect(() => {
    console.log('Login render catch')
  })

  return (
    <div className={styles.login}>
      <Link href="/">Go to Home Page</Link>
      log
      <input onChange={handleChange} name="login" placeholder='Login'/>
      pass
      <input onChange={handleChange} name="password" placeholder='Password'/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default memo(Login)

/**
 // To remember that we can use Next functionality :
 *
 // This gets called on every request
 *  export async function getServerSideProps(context: any) {
 *
  // Pass data to the page via props
 *   return { props: {data:"Hey"} }
 *  }
 */
