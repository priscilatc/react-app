import React from 'react'
//import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-primary p-4">
            <h4 class="text-white">Net-Lab</h4>
            <span class="text-muted">Sistema Automatizado del Laboratorio Clínico </span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-primary">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>          
          </button>         
           
        </nav>
      </div>
    )
}