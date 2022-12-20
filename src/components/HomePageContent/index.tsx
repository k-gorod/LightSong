import React, { FC } from 'react'
import ContentList from '../ContentList'
import styles from './homePageContent.module.scss'

interface IHomePageContent {
    active: boolean
}

const HomePageContent: FC<IHomePageContent> = ({ active }) => {

    return (
        <div className={styles['homePageContent']}>
            <ContentList
                className={`${styles["homePageContent_column"]} ${ active ? styles["homePageContent_column-centered"] : "" }`}
                title="Popular songs"
                ItemComponent={({ children })=> ( <div>{ children }</div> )}
                listData={[
                    "1","2","3"
                ]}
            />
            <ContentList
                className={`${styles["homePageContent_column"]} ${ active ? styles["homePageContent_column-centered"] : "" }`}
                title="Popular playlist"
                ItemComponent={({ children })=> ( <div>{ children }</div> )}
                listData={[
                    "1","2","3"
                ]}
            />
        </div>
    )
}

export default HomePageContent;
