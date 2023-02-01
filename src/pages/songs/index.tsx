// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import Loader from '../../components/Loader'
import PageContent from '../../components/PageContent'
import { useRequest } from '../../hooks/useRequest'

import styles from '../../styles/pages/song.module.scss'

export default function SongPage() {
  const router = useRouter()

  const id = useMemo(() => router.query.id as string, [router.query.id])

  const [userData, isLoading] = useRequest(`http://localhost:4444/user/get?id=${id}`)

  useEffect(()=>{
    console.log(userData)
  }, [userData])

  return (
    <PageContent className={styles['songPage']}>
      <div>
        <Loader />
      </div>
    </PageContent>
  )
}