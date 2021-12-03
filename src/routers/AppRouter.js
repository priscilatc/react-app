import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "../components/index/index";
import ExamenTabla from "../components/examen/ExamenTabla";
import TipoOrdenTabla from "../components/tipoorden/TipoOrdenTabla";
import MedicoTabla from "../components/Medico/MedicoTabla";
import OrdenDetalleTabla from "../components/ordendetalle/OrdenDetalleTabla";
import ResultadosTabla from "../components/resultados/ResultadosTabla";
import ResultadosForms from "../components/resultados/ResultadosForms";
import OrdenTabla from "../components/orden/OrdenTabla";
import AreaTabla from "../components/arealab/AreaLabTabla";
import { Navbar } from "../components/ui/navbar";
import {Sidebar} from "../components/ui/sidebar";

export const AppRouter = () => {
    return (
        <div id="wrapper">
        <BrowserRouter>
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column mb-5"> 
        <div id="content mt-5">
            <Navbar/>
            <Routes>
                <Route path="/index" element={<Index/>}/>
                <Route path="/examen" element={<ExamenTabla/>}/>
                <Route path="/Medico" element={<MedicoTabla/>}/>
                <Route path="/orden" element={<OrdenTabla/>}/>
                <Route path="/resultadostabla" element={<ResultadosTabla/>}/>
                <Route path="/resultadoforms" element={<ResultadosForms/>}/>
                <Route path="/ordendetalletabla" element={<OrdenDetalleTabla/>}/>
                <Route path="/tipoordentabla" element={<TipoOrdenTabla/>}/>
                <Route path="/area" element={<AreaTabla/>}/>

            </Routes>           
            </div></div>
        </BrowserRouter>
        </div>
    );
} 