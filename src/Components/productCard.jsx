import React from 'react'
import s from "./productCard.module.css"



function productCard({marca, model, price, ram, camera, image, stock})
    // const dispatch = useDispatch();
{

    return (
              
        <div className={s.card} >

            <h1 className={s.marca}> Marca: {marca} </h1>

            <img className={s.img}  src= {image} alt= 'Imagen no encontrada' /> 
            
            <h3  className={s.h5}>Modelo: {model}</h3> 
            
            <h4 className={s.h5}>Precio: {price} $</h4>

            <h5 className={s.h5}>Memoria ram: {ram}</h5>

            <h5 className={s.h5}>Camara: {camera}</h5>

            <h5 className={s.h5}>Stock: {stock}</h5>


        </div>   
    )
}

export default productCard

