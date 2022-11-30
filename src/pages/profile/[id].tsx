import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { useRedux } from '../../hooks'

export default function ProfilePage() {
  const router = useRouter()

  const id = useMemo(() => router.query.id as string, [router.query.id])

  const [userData, setUserData] = useState<Response>({} as Response)

  const token = useRedux(state => state.user.token)

  const query = () => {
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    if(id){
      fetch(`http://localhost:4444/user/get?id=${id}`, {
        headers: myHeaders,
        method: 'GET',
        mode: 'cors',
        cache: 'default',
      })
        .then((response) => {
          if (!response.ok) throw "Bad response"
          return response.json()
        })
        .then(data => setUserData(data))
        .catch(err => console.log(err))
    }
  }

  const renderItems = () => {
    return userData ? (
      Object.entries(userData!).map(([key, value], index)=>{
        return (
          <div key={`${index}-userInfo_item`} style={{display: 'grid', gridAutoFlow:"column", gridGap: '30px'}}>
            <div>{key}</div>
            <div>{key === 'createdAt' || key === 'lastSingIn' ? (new Date(value).toDateString()) : (Array.isArray(value) ? value.length : value) }</div>
          </div>
        )
      })
    ) : null
  }

  useEffect(() => {
    query()
  }, [id, token])

  useEffect(()=>{
    console.log(userData)
  }, [userData])

  return (
    <div style={{display: 'grid', justifyContent: 'center', alignContent: 'center',
    minHeight:'100vh'}}>
      User profile with id: { id } 
      <div style={{display: 'grid', margin: '10px 0 0 0'}} >
          {
           renderItems()
          }
      </div>
    </div>
  )
}