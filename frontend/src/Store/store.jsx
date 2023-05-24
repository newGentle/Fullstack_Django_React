import { configureStore } from '@reduxjs/toolkit';
import Slicer from './slicer'

export default configureStore({
    reducer: {
        receipt: Slicer,
    },

})