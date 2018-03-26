import beautify from '../filters/beautify'
export default filterService => {

    return {
        restrict: 'E',
        scope: {
            filterSources: '=',
            currentSelection: '@',
            filterParam: '@'
        },
        templateUrl: '/templates/filters.html',
        replace: true,
        controller: ['$scope', $scope => {

            $scope.selectFilter = source => {
                $scope.currentValue = source
                filterService.passValue({
                    param: $scope.filterParam,
                    value: source
                })
                $scope.selectedFilter = beautify()(source)
            }

        }]
    }
    
}