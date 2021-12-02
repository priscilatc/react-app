import React, { useEffect, useState } from "react";
//import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'idTblMedico', headerName: 'ID', width: 300 },
    { field: 'nombres', headerName: 'Nombres', width: 300 },
    { field: 'apellidos', headerName: 'Apellidos', width: 300 },
    { field: 'numIdentificacion', headerName: 'Numero de Identificación', width: 300},
    { field: 'codMinsa', headerName: 'Código Minsa', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'telefono', headerName: 'Teléfono', width: 200 },
];



const MedicoTabla = () => {
    
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        fetch("https://localhost:44342/api/Medico")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    
	
    return (

        <div class="container mt-5  ">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Médico</h6>
        </div>
        <div class="card-body mb-5">
		
		<table class="table table-success table-stripe">
			<thead>
				<tr>
                  <th scope="col">ID</th>
				  <th scope="col">Nombres</th>
				  <th scope="col">Apellidos</th>
				  <th scope="col">Número de Identificación</th>
                  <th scope="col">Código Minsa</th>
                  <th scope="col">Email</th>
                  <th scope="col">Teléfono</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
                <th scope="col">ID</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Número de Identificación</th>
                <th scope="col">Código Minsa</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
				</tr>
			</tfoot>
			<tbody>
				{tableData.map((medico)=>(
					<tr>
					<td>{medico.idTblMedico}</td>
					<td>{medico.nombres}</td>
                    <td>{medico.apellidos}</td>
                    <td>{medico.numIdentificacion}</td>
                    <td>{medico.codMinsa}</td>
                    <td>{medico.email}</td>
                    <td>{medico.telefono}</td>
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

export default MedicoTabla;