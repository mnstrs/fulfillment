import filtering from './filtering'

export default app => {
    app.services('filtering', ['$scope', filtering])
}