import { GET_ALL, ORDER_BY_BRAND, ORDER_BY_PRICE } from "./Constants";


const initialState = {
    cellphones:[]
}

const rootReducer = (state=initialState, {type,payload})=>{
    switch (type) {
        case GET_ALL :
            return {
                ...state,
                cellphones:payload
            }
        case ORDER_BY_BRAND :
            return {
                ...state,
                cellphones:payload
            }
        case ORDER_BY_PRICE :
            return {
                ...state,
                cellphones:payload
            }
    
        default:
            return state
    }
}

export default rootReducer;