import * as React from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { fetchAllCategories } from "../../Store/Slicers/AllCategorySlicer";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Category.module.css";

const Category = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchAllCategories());
    }, [dispatch]);

    const data = useSelector((state) => state.categories.categories);
    const { status, error } = useSelector((state) => state.categories);

    if (status === "loading") {
        return "Загрузка...";
    }

    if (error) {
        return <h2>Сервер не доступен или страница не существует</h2>;
    }

    return (
        <div className={styles.category}>
            {data.map((item) => (
                <CategoryItem key={item.id} id={item.id} name={item.name} />
            ))}
        </div>
    );
};

export { Category };
