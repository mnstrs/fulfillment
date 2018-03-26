import beautifier from './beautify'

export default app => {
    app.filter('beautify', beautifier)
}