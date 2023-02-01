import { useRouter } from 'next/router';
import React, { FC } from 'react'
import ListItem from '../ListItem';


interface IPlaylistListItem {
    id: number,
    name: string,
    likes: number,
    description: string
}

const PlaylistListItem: FC<IPlaylistListItem> = ({ id,  name, likes, description }) => {
    const router = useRouter();

    return (
        <ListItem id={id} title={name} text={description} likes={likes} type={'playlist'} onClick={()=>router.push('/playlists/1')} />
    )
}

export default PlaylistListItem;
