import React, { useEffect, useState } from "react";



const AreaTabla = () => {

    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        fetch("https://localhost:44342/api/AreaLabServicio")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    
    return (

        <div class="container-fluid mt-4">
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
				  <th scope="col">Estado</th>                 
				</tr>
			</thead>
			<tfoot>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Descripción</th>
                  <th scope="col">Estado</th>
				</tr>
			</tfoot>
			<tbody>
				{tableData.map((area)=>(
					<tr key ="{area.idAreaLabServicio}">
					<td>{area.idAreaLabServicio}</td>
					<td>{area.descripcion}</td>
                    <td>{area.estado}</td>
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

export default AreaTabla;