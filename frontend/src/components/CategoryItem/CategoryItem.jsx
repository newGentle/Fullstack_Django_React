import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";

const CategoryItem = ({ id, name }) => {
    return (
        <Link to={`/${id}`} className={styles.categoryItems}>
            <span> {name} </span>
        </Link>
    );
};

export { CategoryItem };
