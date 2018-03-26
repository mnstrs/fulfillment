import {API_URL} from '../config/index'

const prm = pr => encodeURIComponent(pr)
const parameters = params => Object.keys(params).map(k => prm(k) + '=' + prm(params[k])).join('&')

export const getPeople = ($q, $http, params) => {
    
    const data = {}
    data[params.param] = params.value

    const paramenters = parameters(data)

    return $q((resolve, reject) => {
        
        $http.get(`${API_URL}?${paramenters}`)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })

}