import * as React from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Category } from "./components/Category/Category";
import { Route, Routes } from "react-router-dom";
import { Foods } from "./components/Foods/Foods";
import { FoodDetail } from "./components/FoodDetail/FoodDetail";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/:receipt_id" element={<Foods />} />
                <Route path="/:receipt_id/:id" element={<FoodDetail />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
