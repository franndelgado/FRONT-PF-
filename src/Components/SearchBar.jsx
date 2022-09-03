import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCellphones } from "../Redux/Actions";
import { useSelector } from "react-redux";
import style from './SearchBar.module.css';
import ProductCard from "./productCard";



export default function SearchBar({ onSearch}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const celulares = useSelector(state=> state.cellphones)

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getAllCellphones(name));
    setName(""); // Limpia el input
    // setPagActual(1);
  }

  return (
    <div>
      <input
        type="datalist"
        placeholder="Buscar Celular"
        onChange={(e) => handleInputChange(e)}
        value={name}
      />
            <datalist>
            {celulares?.map((e,i)=>{
                    if( name === e.marca){
                    return(
                        <option key={i} marca={e.marca}/>
                    );
                }})
        }
          </datalist>
         <button className={style.button} type="submit" onClick={(e) => handleSubmit(e)}>
        BUSCAR
      </button>
    </div>
  );


}