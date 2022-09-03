import { GET_ALL, POST_PRODUCT } from "./Constants";


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
        case POST_PRODUCT:
            return{
                ...state,
            }
        default:
            return state
    }
}

export default rootReducer;