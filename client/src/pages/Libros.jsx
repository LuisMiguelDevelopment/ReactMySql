import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../css/libros.css'


const Libros = () => {

    const [libros , setlibros] = useState([])

    useEffect(()=>{
        const mostrarLibros = async () =>{
            try {
               const res = await axios.get('http://localhost:8800/libros') 
               setlibros(res.data);
               console.log(res)    
            } catch (error) {
                console.log(error)
            }
        }
        mostrarLibros();
    },[])

  return (
    <div>
        <div className="libros">
            <h1>Libro software</h1>
            <div className="libros-body">  
                {libros.map((libro)=>(
                    <div key={libro.id} className="card" style={{width: 18  + 'em'}}>
                       {libro.portada &&  <img src={libro.portada} className="card-img-top" alt="..."/>}
                        <div className="card-body">
                            <h5 className="card-title">{libro.titulo}</h5>
                            <p className="card-text">{libro.descrip}</p>
                            <p className="card-text">{libro.precio}</p>
                           
                        </div>
                </div>))}
                <button>
                    <Link className='agregar' to='/agregar'>Agregar nuevo</Link>
                </button>    
            </div>
        </div>
    </div>
  )
}

export default Libros