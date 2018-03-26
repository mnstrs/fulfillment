import {getPeople} from '../services/http'
import filters from './filters'

export default function($scope, $http, $q){

    // filters($scope, $http, $q)

    const sources = { "source": ["christmas_quest", "hero_hunt", "salvation_hunt", "seven_wonders", "space_voyage2", "space_voyage_chapter2", "space_voyage_chapter3", "space_voyage_chapter4", "wo18", "pika_points", "raffle"], "coordinators": ["Ben", "Samantha", "Sergey", "Guilherme", "Furkan", "Lawrence", "Jason", "Kim", "Lisandro", "Habel"] }

    $scope.coordinators = sources.coordinators
    $scope.sources = sources.source

    $scope.current = $scope.default

    // $scope.changeCurrent = string => $scope.current = beatify()(string)

    $scope.selectedFilter = function(){
        console.log('teste')
    }

    getPeople($q, $http)
    .then(success => $scope.people = success.data.response)
    .catch(error => console.log('error', error))

}
