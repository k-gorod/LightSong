// import { useRouter } from 'next/router'
import PageContent from '../../components/PageContent'
import styles from '../../styles/pages/playlists.module.scss'


export default function PlaylistsPage() {
//   const router = useRouter()
//   const id = router.query.id as string

  return (
    <PageContent className={styles['playlistsPage']}>
      <div>
        Playlists page
      </div>
    </PageContent>
  )
}
