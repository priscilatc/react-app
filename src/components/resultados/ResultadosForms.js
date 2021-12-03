import React,{ useState, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom';
import { registrarResultados, listarExamen, listarOrden } from '../../actions/ResultadoAction';
import { Link } from 'react-router-dom'

export const ResultadosForms = () => {

 //   let navigate = useNavigate();
    const [orden, setOrden] = useState([]);
    const [examen, setExamen] = useState([]);
    
    const [resultados, setResultados] = useState({
        idExamen: '',
        idOrden:'',
        resultado:'',
        observaciones:'',
        procesado:'',

    });

    useEffect(()=>{
		
        const fetchDataOrden = async () =>{
			try {
			  const {data: response} = await listarOrden();
			  setOrden(response);
              console.log(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

        const fetchDataExamen = async () =>{
			try {
			  const {data: response} = await listarExamen();
			  setExamen(response);
              console.log(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

		fetchDataOrden();
        fetchDataExamen();
	}, []);

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
            .then(response => alert('Se registró el resultado con éxito ', response));
        //window.open('/resultadostabla', '_parent');
        console.log(resultados);
    }
    return ( 
        <div class="container mt-5  ">
            <Link to="/resultadostabla">
        <li class="fas fa-arrow-left"></li><a>Regresar</a>
        </Link>
        <hr></hr>
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Resultados</h6>
        </div>
        <div class="card-body mb-5">
        
       <form className="row container">

           <label class="card-text">Examen: </label> 
           <select name="idExamen" className="form-control" onClick={ingresarValores}>
                {examen.map((ex)=>(
                    <option key={ex.idExamen} value={ex.idExamen}>
                        {ex.descripcion}
                    </option>
                ))}   
            </select>

           <label class="card-text">N° Orden: </label> 
           <select name="idOrden" className="form-control" onClick={ingresarValores}>
                {orden.map((o)=>(
                    <option key={o.idOrden} value={o.idOrden}>
                        {o.nOrden}
                    </option>
                ))}   
            </select>

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