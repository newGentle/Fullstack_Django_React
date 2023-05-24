import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchAReceipt } from "../../Store/slicer";
import { Link } from "react-router-dom";
import styles from "./Foods.module.css";
import { useParams } from "react-router-dom";

const Foods = () => {
    
    const oneData = useSelector((state) => state.receipt.oneReceipt);
    const {item_status , error} = useSelector(state => state.receipt);
    const receiptListId = useParams();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchAReceipt(receiptListId.receipt_id));
    },[dispatch]);
    
    console.log(item_status)
    if (item_status === 'Loading...') {
        return 'Loading...'
    }
    const name = oneData.length !== 0 ? oneData[0].category : 'Категория пуста';
    return (
        <>
            <h1> {name} </h1>
            {oneData.map((item) => (
                <div className={styles.item}>
                    <Link
                        to={`/${receiptListId.receipt_id}/${item.id}`}
                        key={item.slug}
                        className={styles.button} onClick={() => {
                            dispatch()
                        }}
                    >
                        
                        <img
                            src={item.photo}
                            alt="receipt"
                            className={styles.img}
                        />
                        <h3>{item.name}</h3>
                    </Link>
                </div>
            ))}
        </>
    );
};

export { Foods };
