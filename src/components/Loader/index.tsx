import { useAnim } from 'anim-react'
import React, { FC, useRef } from 'react'
import { CircleLightSongIcon, LightSongLogoIcon } from '../../icons'

import styles from './loader.module.scss'

interface ILoader {

}

const Loader: FC<ILoader> = () => {
    console.log('Loader')

    return (
        <div className={styles['loader_wrapper']}>
            <div className={styles['loader_border']}>
                <div className={styles['loader_overlapper']}></div>
            </div>
            <CircleLightSongIcon />
        </div>
        
    )
}

export default Loader;
