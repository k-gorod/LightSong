import React, { FC } from 'react'
import { SongIcon } from '../../icons'
import GuitaristIcon from '../../icons/GuitaristIcon'
import PlusIcon from '../../icons/PlusIcon'
import ContentList from '../ContentList'
import { fakePlaylist, fakeSong } from '../HomePageContent/fakedata'
import ListItem from '../ListItem'
import styles from './profileCreated.module.scss'

interface IProfileCreated {

}

const ProfileCreated: FC<IProfileCreated> = () => {

    const addFunction = () => {
        console.log('Create item Clicked')
    }

    const getItems = () => {
        const songs = fakeSong.slice(0,4).map((el)=>({...el, text: el.author}));

        const playlists = fakePlaylist.slice(0,3).map((el)=>({...el, title: el.name, text: el.description}));

        const hey = songs.reduce<any>((acc, el, i) => {
            return playlists[i] ? [...acc, el, playlists[i]] : [...acc, el]
        }, [])

        return (
            [
                ...hey,
                {
                    title: "Add",
                    icon: <PlusIcon />,
                    onClick: addFunction
                }
            ]
        )
    }

    return (
        <ContentList className={styles['profileCreated']} title={'Created'} listData={getItems()} ItemComponent={ListItem}/>     
    )
}

export default ProfileCreated;
