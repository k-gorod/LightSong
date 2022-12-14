import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { CircleLightSongIcon } from '../../icons';
import styles from './headerLogoButton.module.scss'


interface IHeaderLogoButton {

}

const HeaderLogoButton: FC<IHeaderLogoButton> = () => {
    const router = useRouter();

    return (
        <CircleLightSongIcon onClick={()=>router.push('/')} className={styles['headerLogoButton']} />
    )
}

export default HeaderLogoButton;
