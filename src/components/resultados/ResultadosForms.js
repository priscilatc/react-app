import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registrarResultados } from '../../actions/ResultadoAction';
//import { Link, NavLink } from 'react-router-dom'

export const ResultadosForms = () => {

    let navigate = useNavigate();
	
    const [resultados, setResultados] = useState({
        idExamen: '',
        idOrden:'',
        resultado:'',
        observaciones:'',
        procesado:'',

    });

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setResultados( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarResultadosBoton = e => {
        e.preventDefault();
        registrarResultados(resultados)
            .then(response => console.log('Se registró el resultado con éxito ', response));
        window.open('/resultadostabla?msj=1', '_parent');
    }
    return ( 
        <div class="container mt-5  ">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Resultados</h6>
        </div>
        <div class="card-body mb-5">

       <form className="row container">

           <label class="card-text">Examen: </label> 
           <input className="form-control" name="idExamen" onChange={ingresarValores} value={resultados.idExamen} type="text"/>
           
           <label class="card-text">Orden: </label> 
           <input className="form-control" name="idOrden" onChange={ingresarValores} value={resultados.idOrden} type="text"/>

           <label class="card-text">Resultados: </label> 
           <input className="form-control" name="resultado" onChange={ingresarValores} value={resultados.resultado} type="text"/>

           <label class="card-text">Observaciones: </label> 
           <input className="form-control" name="observaciones" onChange={ingresarValores} value={resultados.observaciones} type="text"/>

           <label class="card-text">Procesado: </label> 
           <input className="form-control" name="procesado" onChange={ingresarValores} value={resultados.procesado} type="text"/>

           <div className="mb-3">
                <button className="btn btn-primary my-3" type="submit" onClick={registrarResultadosBoton} >Guardar</button>
            </div>
       </form>
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
 
    )
}
export default ResultadosForms;