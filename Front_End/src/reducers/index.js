import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SelectedProductsReducer from './SelectedProductsReducer';
import cartReducer from './cartReducer'

export default combineReducers (
    {
        auth: AuthReducer,
        selectedProducts: SelectedProductsReducer,
        cart: cartReducer
    }
);