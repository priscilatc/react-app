import HttpClient from '../services/HtttpClient';

export const registrarResultados = resultados => {
    return new Promise((resolve, eject) =>{
        HttpClient.post('/Resultado', resultados).then(response =>{
            resolve(response);
        })
    })
}

export const listarOrden = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Ordenes').then(response =>{
            resolve(response);
        })
    })
}

export const listarExamen = () => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Examen').then(response =>{
            resolve(response);
        })
    })
}


