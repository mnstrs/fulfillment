import people from './people'

export default app => {

    app.controller("TableController", ['$scope', '$http', '$q', people])

}
