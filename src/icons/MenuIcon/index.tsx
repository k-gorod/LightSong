import React, { FC } from 'react'
import styles from './menuIcon.module.scss'

interface IMenuIcon {

}

const MenuIcon: FC<IMenuIcon> = () => {

    return (
        <div className={styles['menuIcon']}>
            <div />
            <div />
            <div />
        </div>
    )
}

export default MenuIcon;
