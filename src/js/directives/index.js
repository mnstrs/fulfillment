import filterElementj from './filterElement'

export default app => {
    app.directive('filterElement', ['filterService', filterElementj])
}