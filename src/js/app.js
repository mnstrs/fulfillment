import angular from 'angular'
import controllers from './controllers'
import filters from './filters/'
import directives from './directives/'

export default () => { 

    const app = angular.module('fulfillment', [])
    
    filters(app)
    controllers(app)
    directives(app)

}
