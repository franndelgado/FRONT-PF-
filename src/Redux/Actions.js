import axios from "axios";
import { GET_ALL, POST_PRODUCT } from "../Constants";


export  function getAllCellphones (){
    return (dispatch)=>{
        const cellphones = ["samsung", "iphone" ,"huawei"];
        dispatch({
            type:GET_ALL,
            payload: cellphones
        })
    }
}

export function postProduct(payload) {
    return async function(dispatch) {
        const res = await axios.post('http://localhost:3001/product', payload)
        return {
            type: POST_PRODUCT,
            res
        }
    };
};