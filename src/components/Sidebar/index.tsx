import Link from 'next/link'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useRedux } from '../../hooks'
import { setSidebarIsOpen } from '../../redux/actions/appState.actions'
import Shadow from '../Shadow'
import { menuOptions } from './sidebar.config'

import styles from './sidebar.module.scss'


/**
 * Menu conponent
 */


// TODO: make it appear and disappear smoothly using anim-react


interface ISidebar {

}

const Sidebar: FC<ISidebar> = () => {
    const isVisible = useRedux((state)=> state.appState.sideBarIsVisible)

    const dispatch = useDispatch();

    const onShadowClick = () => {
        dispatch(setSidebarIsOpen(false));
    }

    const clickHandler = () => {
        // console.log('click')
    }

    const onMenuItemClick = () => {
        dispatch(setSidebarIsOpen(false));
    }

    const renderShadow = () => {
        return  isVisible ? <Shadow onClick={onShadowClick}/> : null
    }



    return (
        <>
            {renderShadow()}
        <div className={styles['sidebar_wrapper']}>
            <div className={`${styles['sidebar']} ${isVisible ? styles['sidebar-visible'] : styles['sidebar-hidden'] }`} onClick={clickHandler}>
                {
                    menuOptions.map(({text, url}, index)=>(
                        <Link className={styles['sidebar_item']} onClick={onMenuItemClick} href={`/${url}`} key={`${index}-sidebarItem`}>{text}</Link>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Sidebar;
