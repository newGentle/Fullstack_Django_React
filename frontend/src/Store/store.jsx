import { configureStore } from '@reduxjs/toolkit';
import Slicer from './Slicer'

export default configureStore({
    reducer: {
        receipt: Slicer,
        // TODO add other reducers
    },

})