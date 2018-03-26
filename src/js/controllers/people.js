import {getPeople} from '../services/http'

export default function ($scope, $http, $q, filterService){

    const sources = { "source": ["christmas_quest", "hero_hunt", "salvation_hunt", "seven_wonders", "space_voyage2", "space_voyage_chapter2", "space_voyage_chapter3", "space_voyage_chapter4", "wo18", "pika_points", "raffle"], "coordinators": ["Ben", "Samantha", "Sergey", "Guilherme", "Furkan", "Lawrence", "Jason", "Kim", "Lisandro", "Habel"] }

    $scope.coordinators = sources.coordinators
    $scope.sources = sources.source

    const getPersons = params => {
        getPeople($q, $http, params)
            .then(success => $scope.people = success.data.response)
            .catch(error => console.log('error', error))
    }

    filterService.subscribe(getPersons)
    

}
