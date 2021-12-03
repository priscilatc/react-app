import HttpClient from '../services/HtttpClient';

export const registrarResultados = Resultados => {
    return new Promise((resolve, eject) =>{
        HttpClient.post('/resultadostabla', Resultados).then(response =>{
            resolve(response);
        })
    })
}