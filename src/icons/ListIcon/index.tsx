import React, { FC } from 'react'
import styles from './listIcon.module.scss'


interface IListIcon {

}

export const ListIcon: FC<IListIcon> = () => {
    return (
        <svg className={styles['listIcon']} width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <path d="M21.8884 3.81818V14H20.6555V5.1108H20.5958L18.11 6.76136V5.50852L20.6555 3.81818H21.8884ZM24.578 11.9119V10.8977L29.0525 3.81818H29.7883V5.3892H29.2911L25.9104 10.7386V10.8182H31.936V11.9119H24.578ZM29.3706 14V11.6037V11.1314V3.81818H30.5439V14H29.3706Z" fill="#6B6750"/> */}
            {/* <g clip-path="url(#clip0_400_10682)"> */}
            <path d="M10.2812 7.5H1.09375" stroke="#6B6750" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.9062 4.5H1.09375" stroke="#6B6750" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.9062 10.5H1.09375" stroke="#6B6750" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.2812 13.5H1.09375" stroke="#6B6750" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            {/* </g>
            <defs>
            <clipPath id="clip0_400_10682">
            <rect width="14" height="12" fill="white" transform="translate(0 3)"/>
            </clipPath> */}
            {/* </defs> */}
        </svg>

    )
}
