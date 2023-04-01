import { useAnim } from 'anim-react';
import React, { FC, useEffect, useRef, useState } from 'react'

import styles from './shadow.module.scss'

interface IShadow {
    onClick: () => void
}

const Shadow: FC<IShadow> = ({ onClick: providedOnClick }) => {

    const currentRef = useRef(null);

    const [fulfilled, setFulfilled] = useState(false)

    const {setEndCallback} = useAnim({
        ref: currentRef,
        animName: "opacityAppear",
        userConfig: {
            fill: 'forwards',
            duration: 200
        }
    })

    const onClick = () => {
        providedOnClick()
    }
    
    useEffect(()=>{
        setEndCallback(()=>{
            setFulfilled(true)
        })
    })

    useEffect(()=>{
        console.log(fulfilled)
    }, [fulfilled])

    return (
        <div ref={currentRef} onClick={onClick} className={`${styles['fullscreenShadow']} ${ fulfilled ? styles['fullscreenShadow-fulfilled'] : "" }`} />
    )
}

export default Shadow;
