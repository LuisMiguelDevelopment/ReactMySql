import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/agregar.css'
const Agregar = () => {

    const [libro ,setlibro] =useState({
        titulo:"",
        descrip:"",
        precio:null,
        portada:""

    });

    const navigate = useNavigate()

    const handleChange = async (e) =>{
        setlibro((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleClick = async e=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:8800/libros',libro)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
            <h1>Agregar Productos</h1>
        <div className="agregar-productos">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                <input type="email" class="form-control" name='titulo' placeholder="Titulo" onChange={handleChange} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Descripcion</label>
                <input type="email" class="form-control" name='descrip'  placeholder="Descripcion" onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Precio</label>
                <input type="email" class="form-control" name='precio'  placeholder="Precio" onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Portada</label>
                <input type="email" class="form-control" name='portada'  placeholder="Portada" onChange={handleChange}/>
            </div>
            <button onClick={handleClick}>Enviar</button>
        </div>

    </div>
  )
}

export default Agregar