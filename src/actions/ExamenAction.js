import HttpClient from '../services/HtttpClient';

export const listarExamenOrden = (examen) => {
    return new Promise((resolve, reject) => {
        HttpClient.get('/Examen/Orden/'+examen).then(response =>{
            resolve(response);
        })
    })
}