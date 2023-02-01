import React, { FC } from 'react'
import styles from './plusIcon.module.scss'


interface IPlusIcon {

}

const PlusIcon: FC<IPlusIcon> = () => {
    console.log('PlusIcon')

    return (
        <svg className={styles['plusIcon']} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30 20V40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 30H40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> 

        
    )
}

export default PlusIcon;
