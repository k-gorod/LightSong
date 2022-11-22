import Link from 'next/link'
import React from 'react'

import styles from '../styles/pages/home.module.css'

const SongList = () => {
  return (
    <div>
      <Link href="/">Initial Page</Link>
    </div>
  )
}

export default React.memo(SongList)
