import people from './people'

export default app => {

    app.service('filterService', function () {
        
        this.observers = []

        this.passValue = value => this.notify(value)

        this.notify = data => {
            this.observers.forEach(observer => observer(data))
        }

        this.subscribe = f => this.observers.push(f)
        this.unsubscribe = f => this.observers.filter(subscriber => subscriber !== f)

    })

    app.controller("TableController", ['$scope', '$http', '$q', 'filterService', people])
}
