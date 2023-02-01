import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'
import { HeartIcon, ListIcon, PlaylistIcon, SongIcon } from '../../icons'
import ItemListInfoCounter from '../ItemListInfoCounter'
import styles from './listItem.module.scss'

interface IListItem {
    id: number,
    title: string,
    type: string,
    text?: string,
    icon?: ReactNode,
    likes?: number,
    usedInThisCountPlaylists?: number,
    onClick?: (event?: any)=>void
}

const ListItem: FC<IListItem> = ({ id, title, type, text, icon, likes, usedInThisCountPlaylists, onClick }) => {
    const router = useRouter();

    const clickHandler = (event: any) => {
        if(onClick) {
            onClick(event)
        }
        else {
            if (type === 'song') {
                router.push(`/song/${id}`)
            }
        }
    }

    return (
        <li className={`${styles['contentList_listItem']} listItem`} onClick={clickHandler}>
            <div className={styles['contentList_listItem_iconWrapper']}>
                {icon || (type === 'song' ? <SongIcon /> : <PlaylistIcon />)}
            </div>
            <div className={styles["contentList_listItem_innerText"]}>
                <h3>{title}</h3>
                {text ? <p>{text}</p> : null}
            </div>
            <div className={styles["contentList_listItem_infoBlock"]}>
                <ItemListInfoCounter icon={HeartIcon} value={likes}/>
                <ItemListInfoCounter icon={PlaylistIcon} value={usedInThisCountPlaylists}/>
            </div>
        </li>
    )
}

export default ListItem;
