import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import PageContent from '../../components/PageContent'
import ProfilePageContent from '../../components/ProfilePageContent'
import { useRedux } from '../../hooks'
import { useRequest } from '../../hooks/useRequest'
import styles from '../../styles/pages/profile.module.scss'

export default function ProfilePage() {
  const router = useRouter()

  const id = useMemo(() => router.query.id as string, [router.query.id])

  const [userData, isLoading] = useRequest(`http://localhost:4444/user/get?id=${id}`)

  useEffect(()=>{
    console.log(userData)
  }, [userData])

  return (
    <PageContent className={styles['profilePage']}>
      <div>
          {
           isLoading ? <div>Loading...</div> : <ProfilePageContent profileData={userData}/>
          }
      </div>
    </PageContent>
  )
}