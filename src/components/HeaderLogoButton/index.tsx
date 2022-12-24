import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { CircleLightSongIcon } from '../../icons';
import { setLogoHighlightState } from '../../redux/actions/appState.actions';
import styles from './headerLogoButton.module.scss'


interface IHeaderLogoButton {

}

const HeaderLogoButton: FC<IHeaderLogoButton> = () => {
    const router = useRouter();

    const dispatch = useDispatch()

    const onClick = () => {
        if (router.route === "/") {
            dispatch(setLogoHighlightState(true));
        } else {
            router.push('/')
        }
    }

    return (
        <CircleLightSongIcon onClick={onClick} className={styles['headerLogoButton']} />
    )
}

export default HeaderLogoButton;
