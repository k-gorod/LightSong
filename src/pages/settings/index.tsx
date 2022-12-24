// import { useRouter } from 'next/router'
import PageContent from '../../components/PageContent'

import styles from '../../styles/pages/settings.module.scss'

export default function SettingsPage() {
//   const router = useRouter()
//   const id = router.query.id as string

  return (
    <PageContent className={styles['settingsPage']}>
      <div>
        Settings Page
      </div>
    </PageContent>
  )
}