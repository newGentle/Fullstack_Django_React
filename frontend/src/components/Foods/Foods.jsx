import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../Store/Slicers/CategorySlicer";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "../Styles/Button/Button";
import styles from "./Foods.module.css";

const Foods = () => {
    const oneData = useSelector((state) => state.category.category);
    const { status, error } = useSelector((state) => state.category);
    const categoryId = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        dispatch(fetchCategory(categoryId.receipt_id));
    }, [dispatch, categoryId.receipt_id]);

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

    const name = oneData.length !== 0 ? oneData[0].category : "Категория пуста";
    return (
        <>
            <h1> {name} </h1>
            <div className={styles.container}>
                {oneData.map((item) => (
                    <div className={styles.receipt} key={item.id}>
                        <div className={styles.receipt_header}>
                            <img
                                src={item.photo}
                                alt="receipt"
                                className={styles.img}
                            />
                            <Link to={`/${categoryId.receipt_id}/${item.id}`}>
                                <h2 className={styles.title}>{item.name}</h2>
                            </Link>
                        </div>
                        <div className={styles.description}>
                            <p>{item.description.slice(0, 150)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button onClick={() => navigate(-1)}>Назад</Button>
        </>
    );
};

export { Foods };
