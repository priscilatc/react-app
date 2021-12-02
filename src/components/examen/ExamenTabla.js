import React, { useEffect, useState } from "react";
//import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'idExamen', headerName: 'ID', width: 250 },
    { field: 'descripcion', headerName: 'Descripción', width: 300 },
    {field: 'descripcionCorta', headerName: 'Descripción Corta', width: 250},
    { field: 'confidencial', headerName: 'Confidencial', width: 200 },
];



const ExamenTabla = () => {
    
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        fetch("https://localhost:44342/api/Examen")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    
	
    return (

        <div class="container mt-5  ">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Examen</h6>
        </div>
        <div class="card-body mb-5">
		
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