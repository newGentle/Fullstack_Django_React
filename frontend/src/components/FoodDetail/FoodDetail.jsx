import * as React from "react";
import styles from "./FoodDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchFood } from "../../Store/Slicers/FoodSlicer";
import { Button } from "../Styles/Button/Button";

const FoodDetail = () => {
    const dispatch = useDispatch();
    const FoodData = useSelector((state) => state.food.food);
    const { status, error } = useSelector((state) => state.food);
    const values = useParams();
    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(fetchFood(values));
    }, [dispatch, values]);

    if (status === "loading") {
        return "Загрузка...";
    }

    if (error) {
        return (
            <>
                <h2>Сервер не доступен или страница не существует</h2>
                <Button onClick={() => navigate(-1)}>Назад</Button>
            </>
        );
    }
    
    return (
        <div>
            <div className={styles.container}>
                <h1>{FoodData.name}</h1>
                <div className={styles.food_header}>
                    <img
                        className={styles.img}
                        src={FoodData.photo}
                        alt={FoodData.name}
                    />
                    <pre className={styles.ingredients}>
                        {FoodData.ingredients}
                    </pre>
                </div>
                <pre className={styles.description}>{FoodData.description}</pre>
            </div>
            <Button onClick={() => navigate(-1)}>Назад</Button>
        </div>
    );
};

export { FoodDetail };
