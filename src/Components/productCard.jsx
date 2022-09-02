import React from 'react'
import s from "./productCard.module.css"



function productCard({marca, model, price, ram, camera, image, stock})

{

    return (
              
        <div className={s.card} >

            <h1 className={s.marca}> Marca: {marca} </h1>

            <img className={s.img}  src= {image} alt= 'Imagen no encontrada' width="400px" height="250px" /> 
            
            <h3  className={s.model}>Modelo: {model}</h3> 
            
            <h4 className={s.price}>Precio: {price} $</h4>

            <h5 className={s.ram}>Memoria ram: {ram}</h5>

            <h5 className={s.camera}>Camara: {camera}</h5>

            <h5 className={s.stock}>Stock: {stock}</h5>


        </div>   
    )
}

export default productCard

