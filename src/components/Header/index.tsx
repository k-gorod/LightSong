import React, { FC } from 'react'
import HeaderLogoButton from '../HeaderLogoButton';
import HeaderSearch from '../HeaderSearch';
import LoginButton from '../LoginButton';
import MenuButton from '../MenuButton';


interface IHeader {

}

const Header: FC<IHeader> = () => {
    console.log('Header')

    return (
        <div>
            <MenuButton />
            <HeaderLogoButton />
            <HeaderSearch />
            <LoginButton />
        </div>
    )
}

export default Header;
