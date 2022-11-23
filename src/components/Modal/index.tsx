import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux';
import { setModalVisible } from '../../redux/actions/modalActions';
import Login from '../Login';
import styles from './modal.module.scss';

export const Modal: FC = () => {
    const modalState = useSelector((state: AppState) => state.modal)
    
    const [isVisible, setIsVisible] = useState(false)

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

    useEffect(()=>{
        setIsVisible(modalState.isVisible)
    }, [modalState])

    return isVisible ? (
        <div className={styles['modal-window']}>
            <div className={styles['modal-shadow']} onClick={shadowClickHandler} />
            <div className={styles['modal-contentWrapper']}>
                { renderContent() }
            </div>
        </div>
    ) : <div style={{display: 'none'}}/> // I prefer null, but next forbid this case
}

export default Modal;