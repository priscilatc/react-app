import React, { useEffect, useState } from "react";
import {listarArea} from '../../actions/ExamenAction';


const ExamenTabla = () => {

	const [tableData, setTableData] = useState([]);
	const [area, setArea] = useState([]);

    useEffect(()=>{
        fetch("https://localhost:44342/api/Examen")
        .then((data) => data.json())
		.then((data) => setTableData(data))
		
		const fetchDataArea = async () =>{
			try {
			  const {data: response} = await listarArea();
			  setArea(response);
              console.log(response);
			} catch (error) {
			  console.error(error.message);
			}
		}

		fetchDataArea();
    })
    
    return (

        <div class="container-fluid mt-4">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Examen</h6>
        </div>  		   
        <div class="card-body mb-5">
		<label className="card-text">Area Laboratorio</label>       
            <select name="idAreaLabServicio" className="form-control">
                {area.map((m)=>(
                    <option key={m.idAreaLabServicio} value={m.idAreaLabServicio}>
                        {m.descripcion}
                    </option>
                ))}   
            </select>
		<table class="table table-success table-stripe">
			<thead>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Descripción</th>
				  <th scope="col">Descripción Corta</th>
                  <th scope="col">Confidencial</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Descripción</th>
				  <th scope="col">Descripción Corta</th>
                  <th scope="col">Confidencial </th>
				</tr>
			</tfoot>
			<tbody>
				{tableData.map((examen)=>(
					<tr>
					<td>{examen.idExamen}</td>
					<td>{examen.descripcion}</td>
                    <td>{examen.descripcionCorta}</td>
                    <td>{examen.confidencial}</td>
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

export default ExamenTabla;