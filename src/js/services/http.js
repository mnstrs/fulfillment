import {API_URL} from '../config/index'

export const getPeople = ($q, $http) => {

    return $q((resolve, reject) => {
        $http.get(API_URL)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })

}