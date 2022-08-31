import { GET_ALL } from "./Constants";


export  function getAllCellphones (){
    return (dispatch)=>{
        const cellphones = ["samsung", "iphone" ,"huawei"];
        dispatch({
            type:GET_ALL,
            payload: cellphones
        })
    }
}