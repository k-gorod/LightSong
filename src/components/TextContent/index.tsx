import React, { FC } from 'react'
import styles from './textContent.module.scss'

interface ITextContent {
    data: string,
    title: string
}

const TextContent: FC<ITextContent> = ({ data, title }) => {
    console.log('TextContent')

    return data ? (
        <div className={styles['textContent']}>
            <div className={styles['textContent_title']}>
                <h2>{title}</h2>
            </div>
            <div className={styles['textContent_content']}>
                { data }
            </div>
        </div>
    ) : null
}

export default TextContent;
