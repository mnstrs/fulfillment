export default () => {

    return {
        restrict: 'E',
        scope: {
            filterSources: '=',
            currentSelection:'@',
            selectedFilter: '='
        },
        templateUrl: '/templates/filters.html',
        controller: ['$scope', function ($scope){
          $scope.selectFilter = (source) => {
            $scope.selectedFilter = source;
           }
        }]
    }

}
