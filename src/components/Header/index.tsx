import React, { FC, memo } from 'react'
import { useRedux } from '../../hooks';
import HeaderLogoButton from '../HeaderLogoButton';
import HeaderSearch from '../HeaderSearch';
import LoginButton from '../LoginButton';
import MenuButton from '../MenuButton';
import styles from './header.module.scss'


interface IHeader {

}

const Header: FC<IHeader> = () => {
    const sideBarIsVisible = useRedux<boolean>((state) => state.appState.sideBarIsVisible)

    return (
        <div className={`${styles['header']} ${sideBarIsVisible ? styles['header-disabled'] : ""}`}>
            <MenuButton />
            <HeaderLogoButton />
            <HeaderSearch />
            <LoginButton />
        </div>
    )
}

export default memo(Header);
