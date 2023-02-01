import { useAnim } from 'anim-react'
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react'
import ContentList from '../ContentList'
import PlaylistListItem from '../PlaylistListItem'
import SongListItem from '../SongListItem'
import { fakePlaylist, fakeSong } from './fakedata'
import styles from './homePageContent.module.scss'

interface IHomePageContent {
    active: boolean
}

const HomePageContent: FC<IHomePageContent> = ({ active }) => {

    const [initialTransition, setInitialTransition] = useState<CSSProperties>({
        top: '100%',
    })

    useEffect(()=>{
        setInitialTransition({})
    }, [])

    return (
        <div className={styles['homePageContent']} style={initialTransition}>
            <ContentList
                className={`${styles["homePageContent_column"]} ${ active ? styles["homePageContent_column-centered"] : "" }`}
                title="Popular songs"
                ItemComponent={SongListItem}
                listData={fakeSong}
            />
            <ContentList
                className={`${styles["homePageContent_column"]} ${ active ? styles["homePageContent_column-centered"] : "" }`}
                title="Popular playlist"
                ItemComponent={PlaylistListItem}
                listData={fakePlaylist}
            />
        </div>
    )
}

export default HomePageContent;
