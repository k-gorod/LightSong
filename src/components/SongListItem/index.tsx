import { useRouter } from 'next/router';
import React, { FC } from 'react'
import ListItem from '../ListItem';


interface ISongListItem {
    author: string,
    title: string,
    usedInThisCountPlaylists: number,
    likes: number
}

const SongListItem: FC<ISongListItem> = ({ author, title, usedInThisCountPlaylists, likes }) => {
    const router = useRouter();

    return (
        <ListItem title={title} text={author} type={'song'} usedInThisCountPlaylists={usedInThisCountPlaylists} likes={likes} onClick={()=> router.push('/songs')} />
    )
}

export default SongListItem;
