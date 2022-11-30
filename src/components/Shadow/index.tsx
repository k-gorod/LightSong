import React, { FC } from 'react'

import styles from './shadow.module.scss'

interface IShadow {
    onClick: () => void
}

const Shadow: FC<IShadow> = ({ onClick }) => {
    console.log('Shadow')

    return (
        <div onClick={onClick} className={styles['fullscreenShadow']} />
    )
}

export default Shadow;
