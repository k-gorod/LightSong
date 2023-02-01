import React, { FC } from 'react'
import ProfileFavorite from '../ProfileFavorite';
import ProfileHeader from '../ProfileHeader';
import styles from './profileContent.module.scss'
import TextContent from '../TextContent';
import ProfileCreated from '../ProfileCreated';
import ProfileComments from '../ProfileComments';


type ProfileDataType = any;

interface IProfilePageContent {
    profileData: ProfileDataType
}

const ProfilePageContent: FC<IProfilePageContent> = ({ profileData }) => {
    console.log('profileData', profileData)

    return (
        <div className={styles['profileContent']}>
            <ProfileHeader />
            <div className={styles['profileContent_contentWrapper']}>
                <div className={styles['profileContent_leftContent']}>
                    <ProfileFavorite />
                    <ProfileCreated />
                </div>
                <div className={styles['profileContent_rightContent']}>
                    <TextContent title={"Description"} data={"Description that provided from BE"}/>
                    <ProfileComments />
                </div>
            </div>
        </div>
    )
}

export default ProfilePageContent;
