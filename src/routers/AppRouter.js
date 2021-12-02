import { Routes, Route, BrowserRouter } from "react-router-dom";
import ExamenTabla from "../components/examen/ExamenTabla";
import MedicoTabla from "../components/Medico/MedicoTabla"
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
                <Route path="/examen" element={<ExamenTabla/>}/>
                <Route path="/Medico" elemnt={<MedicoTabla/>}/>
            </Routes>           
            </div></div>
        </BrowserRouter>
        </div>
    );
} 