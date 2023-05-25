import { configureStore } from '@reduxjs/toolkit';
import AllCategorySlicer from './Slicers/AllCategorySlicer';
import CategorySlicer from './Slicers/CategorySlicer';
import FoodSlicer from './Slicers/FoodSlicer';

export default configureStore({
    reducer: {
        categories: AllCategorySlicer,
        category: CategorySlicer,
        food: FoodSlicer
    },

})