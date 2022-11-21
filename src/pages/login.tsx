import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { memo, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/userActions'

const Login = (data: any) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    login: "",
    password: ""
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setUser((pre: any)=>{
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

  useEffect(()=>{
console.log("Login render catch")    
  })

  return (
    <div className={styles['login']}>
      <Link href="/">Initial Page</Link>
      log
      <input onChange={handleChange} name="login"/>
      pass
      <input onChange={handleChange} name="password"/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default memo(Login);

// This gets called on every request
export async function getServerSideProps(context: any) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
console.log()
const req =context.req
// Pass data to the page via props
  return { props: {data:"Hey"} }
}
