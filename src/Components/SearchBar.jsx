import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCellphones } from "../Redux/Actions";
import { useSelector } from "react-redux";
import style from './SearchBar.module.css';



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
        placeholder="Buscar Celular"
        onChange={(e) => handleInputChange(e)}
        value={name}
      />
         <button className={style.button} type="submit" onClick={(e) => handleSubmit(e)}>
        BUSCAR
      </button>
    </div>
  );


}