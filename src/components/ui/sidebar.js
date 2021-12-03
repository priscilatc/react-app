import React from 'react'
import {NavLink} from 'react-router-dom'

export const Sidebar =() => {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
 
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            
            <i class="fas fa-clinic-medical"></i>
            </a>
  
 
            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/index"
                    >
                        Inicio
                    </NavLink>
            </div>
            
            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/examen"
                    >
                        Examen
                    </NavLink>
            </div>

            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Medico"
                    >
                        Médico
                    </NavLink>
            </div>

            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/tipoordentabla"
                    >
                        Tipo Orden
                    </NavLink>
            </div>

            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/orden"
                    >
                        Orden
                    </NavLink>
            </div>

            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/resultadostabla"
                    >
                        Resultados
                    </NavLink>
            </div>

            <hr class="sidebar-divider my-0"/>
            <div class="nav-item active">
            <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/ordendetalletabla"
                    >
                        Orden Detalle
                    </NavLink>
             </div>

            <hr class="sidebar-divider my-0"/>
        </ul>

    )
}