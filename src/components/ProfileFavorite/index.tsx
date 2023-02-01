import React, { FC } from 'react'
import { SongIcon } from '../../icons'
import PlusIcon from '../../icons/PlusIcon'
import ContentList from '../ContentList'
import { fakePlaylist, fakeSong } from '../HomePageContent/fakedata'
import ListItem from '../ListItem'
import styles from './profileFavorite.module.scss'

interface IProfileFavorite {

}

const ProfileFavorite: FC<IProfileFavorite> = () => {

    const addFunction = () => {
        console.log('Add item Clicked')
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
                // ...songs,
                // ...playlists,
                {
                    title: "Add ",
                    icon: <PlusIcon />,
                    onClick: addFunction
                }
            ]
        )
    }

    return (
        <ContentList className={styles['profileFavorite']} title={'Favorite'} listData={((asd)=>{
            console.log('asd', asd)
            return asd 
        })(getItems())} ItemComponent={ListItem}/>     
    )
}

export default ProfileFavorite;
