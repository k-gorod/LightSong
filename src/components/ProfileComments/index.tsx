import React, { FC } from 'react'
import GuitaristIcon from '../../icons/GuitaristIcon'
import ContentList from '../ContentList'
import { fakePlaylist, fakeSong } from '../HomePageContent/fakedata'
import ListItem from '../ListItem'
import styles from './profileComments.module.scss'

interface IProfileComments {

}


const fakeComments = [
    {
        id: 1,
        title: "Kostya",
        text: "Here is text of commment",
        icon: <GuitaristIcon />
    },
    {
        id: 2,
        title: "Kostya",
        text: "Here is text of commment",
        icon: <GuitaristIcon />
    },
    {
        id: 3,
        title: "Kostya",
        text: "Here is text of commment",
        icon: <GuitaristIcon />
    },
    {
        id: 4,
        title: "Kostya",
        text: "Here is text of commment",
        icon: <GuitaristIcon />
    },
    {
        id: 5,
        title: "Kostya",
        text: "Here is text of commment",
        icon: <GuitaristIcon />
    },
]

const ProfileComments: FC<IProfileComments> = () => {

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
                    icon: <GuitaristIcon />,
                    onClick: addFunction
                }
            ]
        )
    }

    return (
        <ContentList className={styles['profileComments']} title={'Comments'} listData={fakeComments} ItemComponent={ListItem}/>     
    )
}

export default ProfileComments;
