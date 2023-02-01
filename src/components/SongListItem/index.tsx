import { useRouter } from 'next/router';
import React, { FC } from 'react'
import ListItem from '../ListItem';


interface ISongListItem {
    id: number,
    author: string,
    title: string,
    usedInThisCountPlaylists: number,
    likes: number
}

const SongListItem: FC<ISongListItem> = ({ id, author, title, usedInThisCountPlaylists, likes }) => {
    const router = useRouter();

    return (
        <ListItem id={id} title={title} text={author} type={'song'} usedInThisCountPlaylists={usedInThisCountPlaylists} likes={likes} onClick={()=> router.push('/songs')} />
    )
}

export default SongListItem;
