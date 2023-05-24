import * as React from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Receipt } from "./components/Receipt/Receipt";
import { Route, Routes } from "react-router-dom";
import { Foods } from "./components/Foods/Foods";
import { FoodDetail } from "./components/FoodDetail/FoodDetail";
import { fetchReceipts } from "./Store/slicer";
import { useDispatch, useSelector } from "react-redux";

function App() {
 
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchReceipts());
        
    }, [dispatch]);
       
    const data = useSelector(state => state.receipt.receipt);
    
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Receipt data={data}/>} />
                <Route path="/:receipt_id" element={<Foods _name={data}/>} />
                <Route path="/:receipt_id/:id" element={<FoodDetail />} />
            </Routes>
        </div>
    );
}

export default App;
