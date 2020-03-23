import {CART_POINT} from './types'

export const Cartpoint = (totalcart)=>{
    return{
        type: CART_POINT,
        payload: totalcart
    }
}