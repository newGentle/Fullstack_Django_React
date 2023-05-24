import * as React from "react";
import { ReceiptItem } from "../ReceiptItem/ReceiptItem";
import styles from './Receipt.module.css';

const Receipt = ({data}) => {
    
    return (
        <div className={styles.receipt}>
            {data.map((item) => (
                <ReceiptItem key={item.id} id={item.id} name={item.name}/>
                ))}
        </div>
    );
};

export { Receipt };
