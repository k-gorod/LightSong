// import { useRouter } from 'next/router'
import PageContent from '../../components/PageContent'

import styles from '../../styles/pages/songs.module.scss'

export default function SongsPage() {
//   const router = useRouter()
//   const id = router.query.id as string

  return (
    <PageContent className={styles['songsPage']}>
      <div>
        Songs page
      </div>
    </PageContent>
  )
}