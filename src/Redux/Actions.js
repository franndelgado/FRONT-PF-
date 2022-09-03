import { GET_ALL, ORDER_BY_BRAND, ORDER_BY_PRICE } from "./Constants";
import {axios} from 'axios'

export  function getAllCellphones (){
    return async (dispatch)=>{
        const cellphones = await axios.get('http://localhost:3001/product')
        dispatch({
            type:GET_ALL,
            payload: cellphones.data
        })
    }
}


export function orderByBrand(payload){
    return{
        type:ORDER_BY_BRAND,
        payload

    }
} 

export function orderByPrice(payload){
    return{
        type:ORDER_BY_PRICE,
        payload

    }
} 