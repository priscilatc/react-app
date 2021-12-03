import React, { useEffect, useState } from "react";
//import { DataGrid } from '@mui/x-data-grid';

const OrdenDetalleTabla = () => {
    
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        fetch("https://localhost:44342/api/Ordenes")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    
    function enviarParams (e, idOrdenDetalle) {

		e.preventDefault();
		window.open('/examen?idOrdenDetalle='+idOrdenDetalle, '_parent');
	}
	
    return (

        <div class="container-fluid mt-4 ">
        <div class="card shadow mb-4 ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Orden</h6>
        </div>

        <div class="card-body mb-5 ">
		
		<table class="table table-success table-stripe">
			<thead>
				<tr>
				  <th scope="col">ID</th>
                  <th scope="col">ID Orden</th>
				  <th scope="col">N° Orden</th>
				  <th scope="col">ID Examen</th>
                  <th scope="col">Activo</th>
                  <th scope="col">Opciones</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
                <th scope="col">ID</th>
                <th scope="col">ID Orden</th>
                <th scope="col">N° Orden</th>
                <th scope="col">ID Examen</th>
                <th scope="col">Activo</th>
                <th scope="col">Opciones</th>
				</tr>
			</tfoot>
			<tbody>
				{tableData.map((ordendetalle)=>(
					<tr key="{ordendetalle.idOrdenDetalle}">
					<td>{ordendetalle.idOrdenDetalle}</td>
					<td>{ordendetalle.idOrden}</td>
                    <td>{ordendetalle.nOrden}</td>
                    <td>{ordendetalle.idExamen}</td>
                    <td>{ordendetalle.activo}</td>
                    <td><a href="#" onClick={e => enviarParams(e, ordendetalle.idOrdenDetalle)}></a><i class="fas fa-clipboard-list"></i></td>
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

export default OrdenDetalleTabla;