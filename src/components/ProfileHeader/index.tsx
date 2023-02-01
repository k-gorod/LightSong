import React, { FC } from 'react'
import styles from './profileHeader.module.scss'

interface IProfileHeader {

}

const ProfileHeader: FC<IProfileHeader> = () => {
    console.log('ProfileHeader')

    return (
        <div className={styles['profileHeader']}>

        </div>
    )
}

export default ProfileHeader;
