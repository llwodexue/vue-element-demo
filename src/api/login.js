import axios from './index'

export function handleUserLogin(params={}){
    return axios.post('/user/login',params).then(result => {
        if(parseInt(result.code) === 0){
            return result.power;
        }
        return Promise.reject(result.codeText);
    });
}