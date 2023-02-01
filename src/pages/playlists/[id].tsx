// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import PageContent from '../../components/PageContent'
import { useRequest } from '../../hooks/useRequest'
import styles from '../../styles/pages/playlists.module.scss'


export default function PlaylistsPage() {
//   const router = useRouter()
//   const id = router.query.id as string
const router = useRouter()

const id = useMemo(() => router.query.id as string, [router.query.id])

const [playlistData, isLoading] = useRequest(id ? `http://localhost:4444/playlist/get?id=${id}` : undefined)


const renderItems = () => {
  return playlistData ? (
    Object.entries(playlistData).map(([key, value], index)=>{
      return typeof value !== "object" ? (
        <div key={`${index}-userInfo_item`} style={{display: 'grid', gridAutoFlow:"column", gridGap: '30px'}}>
          <div>{key}</div>
          {/** @ts-ignore */}
          <div>{key === 'createdAt' || key === 'lastSingIn' ? (new Date(value).toDateString()) : (Array.isArray(value) ? value.length : value) }</div>
        </div>
      ) : null
    })
  ) : null
}

  return (
    <PageContent className={styles['playlistsPage']}>
      <div>
        {
          isLoading ? <div>Loading...</div> : renderItems()
        }
      </div>
    </PageContent>
  )
}
