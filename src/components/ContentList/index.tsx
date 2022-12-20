import React, { FC, ReactNode } from 'react'
import styles from './contentList.module.scss'

interface IContentList {
    listData: any[];
    title: string;
    className: string;
    ItemComponent: FC<any>;
}

const ContentList: FC<IContentList> = ({ className, title, listData, ItemComponent }) => {

    return (
        <div className={`${styles['contentList']} ${className}`}>
            <div className={styles['contentList_title']}>
                <h2>{title}</h2>
            </div>
            <ul className={styles['contenList_listParent']}>
                {
                    listData.map((el, index)=>(
                        <ItemComponent key={`${index}-listItem-${title}`}>{ el }</ItemComponent>
                        // <ItemComponent data={el} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ContentList;
