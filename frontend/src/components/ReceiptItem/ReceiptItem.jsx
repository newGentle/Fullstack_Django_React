import * as React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ReceiptItem.module.css";
// import { setReceiptName } from "../../Store/slicer";

const ReceiptItem = ({ id, name }) => {
    // const dispatch = useDispatch();

    return (
        <Link to={`/${id}`} className={styles.receiptItems} >
            <span> {name} </span>
        </Link>
    );
};

export { ReceiptItem };
