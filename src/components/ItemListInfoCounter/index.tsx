import React, { FC } from 'react'
import styles from './itemListInfoCounter.module.scss'

interface IItemListInfoCounter {
    icon: FC,
    className?: string
    value?: number | string
}

const ItemListInfoCounter: FC<IItemListInfoCounter> = ({ className, icon: Icon, value }) => {
    return value ? (
        <div className={`${styles['itemListInfoCounter']} ${className}`}>
            <Icon />
            <p>{ value }</p>
        </div>
    ) : null
}

export default ItemListInfoCounter;
