import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useRedux } from '../../hooks'
import { LightSongLogoIcon } from '../../icons'
import { setLogoHighlightState } from '../../redux/actions/appState.actions'
import styles from './centerLogo.module.scss'
 
interface ICenterLogo {
    // className?: string
}

export const CenterLogo: FC<ICenterLogo> = ({  }) => {

    const dispatch = useDispatch()

    const logoIsHighlighted = useRedux<boolean>((state) => state.appState.logoIsHighlighted)

    const onClick = () => {
        dispatch(setLogoHighlightState(!logoIsHighlighted))
    }

    return (
        <div className={`${styles['centerLogo_wrapper']} ${logoIsHighlighted ? styles["centerLogo_wrapper-highlighted"] : ""}`}>
            <LightSongLogoIcon onClick={onClick} isHighlighted={logoIsHighlighted}/>
        </div>
    )
}
