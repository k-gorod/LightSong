import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRedux } from '../../hooks';
import { AppState } from '../../redux';
import { setModalVisible } from '../../redux/actions/modal.actions';
import Login from '../Login';
import Shadow from '../Shadow';
import styles from './modal.module.scss';

interface IModalState {
    content: string,
    isVisible: boolean
}

export const Modal: FC = () => {
    const modalState = useRedux<IModalState>((state) => state.modal)
    
    const dispatch = useDispatch();

    const shadowClickHandler = () => {
        dispatch(setModalVisible({
            isVisible: false
        }))
    }

    const renderContent = () => {
        switch(modalState?.content) {
            case "login" : 
                return <Login />
            default :
                return ""
        }
    }


    return modalState?.isVisible ? (
        <div className={styles['modal-window']}>
            <Shadow onClick={shadowClickHandler} />
            <div className={styles['modal-contentWrapper']}>
                { renderContent() }
            </div>
        </div>
    ) : <div style={{display: 'none'}}/> // I prefer null, but next forbid this case
}

export default Modal;