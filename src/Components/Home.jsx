import {useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import {getAllCellphones} from "../Redux/Actions.js";
import ProductCard from "../Components/productCard";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import style from "./Home.module.css";





const itemsPerPage = 10;

function Home() {

    const dispatch = useDispatch()
    const celulares = useSelector(state=> state.cellphones)

    console.log('Todos los celuuuuuus', celulares)

    const [orden, setOrden] = useState("");

    const [pagActual, setPagActual] = useState(1); // Mi pagina actual sera 1
    // const [celsPerPage, setcelsPerPage] = useState(6);
    console.log(pagActual)
  
    const indexOfUltimoCel = pagActual * itemsPerPage; // 10
    const indexOfPrimerCel = indexOfUltimoCel - itemsPerPage; // 0
    const CelActual = celulares.slice(indexOfPrimerCel, indexOfUltimoCel);

   

    useEffect(() => {
     dispatch(getAllCellphones());
       }, [dispatch]);
    

    return(
        
        <div className= {style.Home}>
             <div className={style.paginado}>
            <Paginado pagActual={pagActual} todosCelulares={celulares} 
            itemsPerPage={itemsPerPage} setPagActual={page => setPagActual(page)}/>
            <SearchBar />
            </div>
            <div className={style.box}>
            {CelActual?.map((e,i)=>{
                    return(
                        <ProductCard key={i} marca={e.marca} 
                        model={e.model} price={e.price} ram={e.ram} 
                        camera={e.camera} image={e.image} stock={e.stock}/>
                    );
                })
        } </div>
        </div>
    )
}

export default Home;