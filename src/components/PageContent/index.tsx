import React, { FC, ReactNode } from 'react'
import styles from './page.module.scss'

interface IPageContent {
    children: ReactNode,
    className?: string
}

const PageContent: FC<IPageContent> = ({ children, className }) => {

    return (
        <div className={`${styles['pageContent']} ${className ?? ""}`}>
            { children }
        </div>
    )
}

export default PageContent;
