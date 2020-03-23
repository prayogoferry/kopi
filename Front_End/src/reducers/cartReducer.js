import {CART_POINT} from '../actions/types'

const INITIAL_STATE = {
    cartpoint: 0,

}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CART_POINT:
            return {...state, cartpoint:action.payload}

            default: 
            return state
    }
}