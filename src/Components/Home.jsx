import {useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import {getAllCellphones} from "../Redux/Actions.js";
import Card from "../Components/Card"


function Home() {

    const dispatch = useDispatch()
    const celulares = useSelector(state=> state.cellphones)


    useEffect(() => {
     dispatch(getAllCellphones())
      return () => {
     console.log("desmonte Home")
      }
    }, [dispatch])
    

    return(
        <div>
            {
                celulares.map(e=>{
                    return(
                        <Card nombre={e}/>
                    )
                })
            }
        </div>
    )
}

export default Home;