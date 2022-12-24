import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import PageContent from '../../components/PageContent'
import { useRedux } from '../../hooks'
import { useRequest } from '../../hooks/useRequest'
import styles from '../../styles/pages/profile.module.scss'

export default function ProfilePage() {
  const router = useRouter()

  const id = useMemo(() => router.query.id as string, [router.query.id])

  const [userData, isLoading] = useRequest(`http://localhost:4444/user/get?id=${id}`)

  const renderItems = () => {
    return userData ? (
      Object.entries(userData!).map(([key, value], index)=>{
        return (
          <div key={`${index}-userInfo_item`} style={{display: 'grid', gridAutoFlow:"column", gridGap: '30px'}}>
            <div>{key}</div>
            {/** @ts-ignore */}
            <div>{key === 'createdAt' || key === 'lastSingIn' ? (new Date(value).toDateString()) : (Array.isArray(value) ? value.length : value) }</div>
          </div>
        )
      })
    ) : null
  }

  useEffect(()=>{
    console.log(userData)
  }, [userData])

  return (
    <PageContent className={styles['profilePage']}>
      <div>
          {
           isLoading ? <div>Loading...</div> : renderItems()
          }
      </div>
    </PageContent>
  )
}