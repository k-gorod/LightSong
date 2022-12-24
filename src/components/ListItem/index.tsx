import React, { FC, ReactNode } from 'react'
import { HeartIcon, ListIcon, PlaylistIcon, SongIcon } from '../../icons'
import ItemListInfoCounter from '../ItemListInfoCounter'
import styles from './listItem.module.scss'

interface IListItem {
    title: string,
    type: string,
    text?: string,
    icon?: ReactNode,
    likes?: number,
    usedInThisCountPlaylists?: number,
    onClick?: ()=>void
}

const ListItem: FC<IListItem> = ({ title, type, text, icon, likes, usedInThisCountPlaylists, onClick }) => {

    return (
        <li className={styles['contentList_listItem']} onClick={onClick}>
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
