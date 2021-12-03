import HttpClient from '../services/HtttpClient';

export const listarOrdenPorTipo = (tipoOrden) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Orden/ConsultaTipoOrden/'+tipoOrden).then(response =>{
            resolve(response);
        })
    })
}

export const listarOrden = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Orden').then(response =>{
            resolve(response);
        })
    })
}

export const listarTipoOrden = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/tipoorden').then(response =>{
            resolve(response);
        })
    })
}