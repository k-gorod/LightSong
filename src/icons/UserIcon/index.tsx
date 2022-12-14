import React, { FC } from 'react'
import styles from './userIcon.module.scss';

interface IUserIcon {
    className?: string
    onClick?: () => void
}

export const UserIcon: FC<IUserIcon> = ({ className, onClick }) => {
    return (
        <svg className={`${styles['userIcon']} ${className ?? ""}`} onClick={onClick} viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="currentColor"/>
            <path d="M29.909 28.0832C31.3534 28.0832 32.7653 27.6549 33.9663 26.8525C35.1673 26.05 36.1033 24.9094 36.6561 23.575C37.2088 22.2406 37.3534 20.7722 37.0716 19.3555C36.7899 17.9389 36.0943 16.6376 35.073 15.6163C34.0516 14.595 32.7504 13.8994 31.3337 13.6176C29.9171 13.3358 28.4487 13.4805 27.1143 14.0332C25.7798 14.5859 24.6393 15.522 23.8368 16.723C23.0343 17.9239 22.606 19.3359 22.606 20.7803C22.606 22.7171 23.3754 24.5747 24.745 25.9443C26.1146 27.3138 27.9721 28.0832 29.909 28.0832Z" fill="currentColor"/>
            <path d="M40.8635 46.3406C41.3477 46.3406 41.8121 46.1482 42.1544 45.8058C42.4968 45.4634 42.6892 44.999 42.6892 44.5148C42.6892 41.1253 41.3427 37.8746 38.946 35.4779C36.5492 33.0811 33.2985 31.7346 29.909 31.7346C26.5195 31.7346 23.2688 33.0811 20.872 35.4779C18.4753 37.8746 17.1288 41.1253 17.1288 44.5148C17.1288 44.999 17.3211 45.4634 17.6635 45.8058C18.0059 46.1482 18.4703 46.3406 18.9545 46.3406H40.8635Z" fill="currentColor"/>
        </svg>
    )
}
