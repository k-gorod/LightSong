import React, { FC, memo, useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../icons';
import styles from './headerSearch.module.scss'

interface IHeaderSearch {

}

const HeaderSearch: FC<IHeaderSearch> = () => {
    const [active, setActive] = useState(false);

    const [inputValue, setInputValue] = useState("")
    
    const ref = useRef(null);

    const search = () => {
        console.log("TODO: search that", inputValue)
        setActive(false)

    }

    const onInputChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const onIconClick = () => {
        if(!active) {
            setActive(true)
        } else {
            search();
        }   
    }

    const onInputBlur = () => {
        setActive(false)
    }

    const onInputKeyDown = (event: any) => {
        if (event.code === "Enter"){
            search()
        }
    }

    useEffect(()=>{
        // console.log('active', active)
        if (ref.current && active) {
            // @ts-ignore
            ref.current.focus()
        }
    },[active, ref])

    return (
        <div className={`${styles['headerSearch']} ${active ? styles['headerSearch-acitve'] : null}`} >
            <div className={styles['headerSearch_iconWrapper']}>
                <SearchIcon inverseColor={active} onClick={onIconClick}/>
            </div>
            {
                active ? <input ref={ref} placeholder={"Looking for..."} onChange={onInputChange} onKeyDown={onInputKeyDown} onBlur={onInputBlur} /> : null
            }
        </div>
    )
}

export default memo(HeaderSearch);
