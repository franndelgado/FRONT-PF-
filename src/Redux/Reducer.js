import { GET_ALL } from "./Constants";


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
    
        default:
            return state
    }
}

export default rootReducer;