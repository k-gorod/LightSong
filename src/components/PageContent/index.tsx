import React, { FC, ReactNode, useEffect, useRef } from 'react'
import { useRedux } from '../../hooks'
import styles from './page.module.scss'
// import video from '';


interface IPageContent {
    children: ReactNode,
    className?: string
}

const PageContent: FC<IPageContent> = ({ children, className }) => {
    const sideBarIsVisible = useRedux<boolean>((state) => state.appState.sideBarIsVisible)

    return (
        <div className={`${styles['pageContent']} ${sideBarIsVisible ? styles["pageContent-disabled"] : ""} ${className ?? ""}`}>
            { children }
        </div>
    )
}

export default PageContent;
