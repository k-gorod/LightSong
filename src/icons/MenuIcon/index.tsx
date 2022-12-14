import React, { FC } from 'react'
import styles from './menuIcon.module.scss'

interface IMenuIcon {

}

export const MenuIcon: FC<IMenuIcon> = () => {

    return (
        <svg className={styles['menuIcon']} viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="currentColor"/>
            <path d="M17.375 21.75H43.625" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.375 30.5H43.625" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.375 39.25H43.625" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>


    )
}
