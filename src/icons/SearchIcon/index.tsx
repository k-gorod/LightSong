import React, { FC } from 'react'
import styles from './searchIcon.module.scss'

interface ISearchIcon {

}

export const SearchIcon: FC<ISearchIcon> = () => {
    console.log('SearchIcon')

    return (
        // <svg className={styles['searchIcon']} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <circle cx="30" cy="30" r="30" fill="#A69E83"/>
        //     <path d="M29.0417 40.7083C35.485 40.7083 40.7083 35.485 40.7083 29.0417C40.7083 22.5983 35.485 17.375 29.0417 17.375C22.5983 17.375 17.375 22.5983 17.375 29.0417C17.375 35.485 22.5983 40.7083 29.0417 40.7083Z" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        //     <path d="M43.625 43.625L37.2812 37.2812" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        // </svg>
        <svg className={styles['searchIcon']} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#A69E83"/>
            <path d="M29.0417 40.7083C35.485 40.7083 40.7083 35.485 40.7083 29.0417C40.7083 22.5983 35.485 17.375 29.0417 17.375C22.5983 17.375 17.375 22.5983 17.375 29.0417C17.375 35.485 22.5983 40.7083 29.0417 40.7083Z" stroke="#FFFCE9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M43.625 43.625L37.2812 37.2812" stroke="#FFFCE9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
