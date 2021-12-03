import React, { useEffect, useState } from "react";
//import { DataGrid } from '@mui/x-data-grid';
import { Link, NavLink } from 'react-router-dom'

const ResultadosTabla = () => {
    
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        fetch("https://localhost:44342/api/Resultado")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    
	
    return (

        <div class="container-fluid mt-4">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Resultados</h6>
        </div>
        <div class="card-body mb-5">
		<Link to="/resultadoforms">
		<button className="btn btn-primary my-3">Nuevo Tipo Orden</button>
		</Link>
		<table class="table table-success table-stripe">
			<thead>
				<tr>
				  <th scope="col">ID</th>
                  <th scope="col">Examen</th>
				  <th scope="col">Orden</th>
				  <th scope="col">Resultado</th>
                  <th scope="col">Observaciones</th>
                  <th scope="col">Procesado</th>
                  <th scope="col">Estado</th>

				</tr>
			</thead>
			<tfoot>
				<tr>

                  <th scope="col">ID</th>
                  <th scope="col">Examen</th>
				  <th scope="col">Orden</th>
				  <th scope="col">Resultado</th>
                  <th scope="col">Observaciones</th>
                  <th scope="col">Procesado</th>
                  <th scope="col">Estado</th>
				</tr>
			</tfoot>
			<tbody>
				{tableData.map((resultados)=>(
					<tr>
					<td>{resultados.idResultados}</td>
					<td>{resultados.idExamen}</td>
                    <td>{resultados.idOrden}</td>
                    <td>{resultados.resultado}</td>
                    <td>{resultados.observaciones}</td>
                    <td>{resultados.procesado}</td>
                    <td>{resultados.estado}</td>

					</tr>
				))}
			</tbody>
			
		</table>
		
        
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
    );

  
}

export default ResultadosTabla;