import HttpClient from '../services/HtttpClient';

export const registrarResultados = resultados => {
    return new Promise((resolve, eject) =>{
        HttpClient.post('/Resultado', resultados).then(response =>{
            resolve(response);
        })
    })
}