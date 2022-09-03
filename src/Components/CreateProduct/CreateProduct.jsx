import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postProduct} from '../actions/index';

function validate(input){
    let errors = {};

    if(!input.model) errors.model = 'Se requiere el nombre del producto';
    if(!/[a-zA-Z]{4}/.test(input.model)) errors.model = 'Solo se permiten letras y por lo menos 4 caracteres';

    if(!input.marca) errors.marca = 'Se requiere la marca del producto';

    if(!input.color) errors.color = 'Se requiere el color del producto';
    
    if(!/^[0-9]*$/.test(input.price)) errors.price = 'Solo se permiten números';
    
    if(!input.ram) errors.ram = 'Campo obligatorio';
    
    if(!input.camera) errors.camera = 'Campo obligatorio';

    if(!input.image) errors.image = 'Se requiere una o más fotos del producto';
    return errors;
}


export default function CreateProduct(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        marca: '',
        model: '',
        price: 0,
        color:'',
        ram: '',
        camera:'',
        image: '',
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postProduct(input))
        setInput({ 
            marca: '',
            model: '',
            price: 0,
            color:'',
            ram: '',
            camera:'',
            image: '',
        });
        alert('Producto creado correctamente');
        history.push('/home');
        }


    useEffect(() => {
        // dispatch(getProducts())
        document.getElementById('input-create').disabled = true;
    }, [dispatch]);

    return(
        <div>
            {/* <Link to='/home'>Volver</Link> */}
            <h1 >Publicar un producto</h1>
            <form onSubmit={handleSubmit(e)} >

                    <div >
                        <label>Modelo:
                            <input type='text' value={input.model} name='model' placeholder='Nombre del producto' onChange={(e) => handleChange(e)}></input>
                        </label>
                            {errors.model && ( <p>{errors.model}</p> )}
                    </div>

                    <div >
                        <label>Marca:
                            <input type='text' value={input.marca} name='marca' placeholder='Nombre del producto' onChange={(e) => handleChange(e)}></input>
                        </label>
                            {errors.marca && ( <p>{errors.marca}</p> )}
                    </div>

                    <div>
                        <label>Color:
                            <input type='text' value={input.color} name='color' placeholder='' onChange={(e) => handleChange(e)}></input>
                        </label>
                            {errors.color && ( <p>{errors.color}</p> )}
                    </div>

                    <div>
                        <label>Camara:
                            <input type='text' value={input.camera} name='camera' placeholder='' onChange={(e) => handleChange(e)}></input>
                        </label>
                            {errors.camera && ( <p>{errors.camera}</p> )}
                    </div>

                    <div >
                        <label>RAM:
                            <input type='text' value={input.ram} name='ram' placeholder='Pasos...' onChange={(e) => handleChange(e)}></input>
                        </label>
                            {errors.ram && ( <p>{errors.ram}</p> )}
                    </div>

                    <div>
                        <label >Precio:
                            <input type='number' value={input.price} name='price' placeholder='Precio' onChange={(e) => handleChange(e)}></input>
                        </label>
                            {errors.price && ( <p>{errors.price}</p> )}
                    </div>

                    <div >
                        <label>Imagen:
                            <input type='text' name='image' placeholder='' onChange={(e) => handleChange(e)}></input>
                        </label>
                    </div>
                

                <br/>
                <br/>
                <div className='button-form'>
                    <input use id='input-create' disabled={Object.keys(errors).length}  type="submit" value='Crear!' className='input'/> 
                </div>
            </form>
        </div>
    )
}