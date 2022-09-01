import {useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import {getAllCellphones} from "../Redux/Actions.js";
import Card from "../Components/Card"
import Paginado from "./Paginado"
import style from "./paginado.module.css";




const itemsPerPage = 10;

function Home() {

    const dispatch = useDispatch()
    const celulares = useSelector(state=> state.cellphones)

    const [orden, setOrden] = useState("");

    const [pagActual, setPagActual] = useState(1); // Mi pagina actual sera 1
  
    const indexOfUltimoCel = pagActual * itemsPerPage; // 10
    const indexOfPrimerCel = indexOfUltimoCel - itemsPerPage; // 0
    const CelActual = celulares.slice(indexOfPrimerCel, indexOfUltimoCel);


    useEffect(() => {
     dispatch(getAllCellphones())
      return () => {
     console.log("desmonte Home")
      }
    }, [dispatch])
    

    return(
        
        <div>
             <div className={style.paginado}>
            <Paginado pagActual={pagActual} todosCelulares={celulares} itemsPerPage={itemsPerPage} setPagActual={page => setPagActual(page)}/>
            </div>
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