import React, { FC, memo } from 'react'
import HeaderLogoButton from '../HeaderLogoButton';
import HeaderSearch from '../HeaderSearch';
import LoginButton from '../LoginButton';
import MenuButton from '../MenuButton';
import styles from './header.module.scss'


interface IHeader {

}

const Header: FC<IHeader> = () => {
    console.log('Header')

    return (
        <div className={styles['header']}>
            <MenuButton />
            <HeaderLogoButton />
            <HeaderSearch />
            <LoginButton />
        </div>
    )
}

export default memo(Header);
