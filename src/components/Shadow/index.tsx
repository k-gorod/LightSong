import React, { FC, useEffect, useState } from 'react'

import styles from './shadow.module.scss'

interface IShadow {
    onClick: () => void
}

const Shadow: FC<IShadow> = ({ onClick }) => {
    const [transitionStyle, setTransitionStyle] = useState({});

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setTransitionStyle({
                background: 'rgba(0, 0, 0, 0.3)'
            })
        }, 0)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <div onClick={onClick} className={styles['fullscreenShadow']} style={transitionStyle} />
    )
}

export default Shadow;
