import React, { FC } from 'react'
import { SearchIcon } from '../../icons';
import styles from './headerSearch.module.scss'

interface IHeaderSearch {

}

const HeaderSearch: FC<IHeaderSearch> = () => {
    console.log('HeaderSearch')

    return (
        <div className={styles['headerSearch']}>
            <SearchIcon />
        </div>
    )
}

export default HeaderSearch;
