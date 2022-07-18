import 'normalize.css'
import 'reset-css'
import '../stylesheets/fonts.css'
import '@/stylesheets/styles.sass'
import SearchHandler from './searchHandler.ts'

const searchSelector = '[rel="js-search-container"]'

console.log("in index.js")

let searchHandler = new SearchHandler(searchSelector)
searchHandler.addSubmitHandler((data) => {console.log(data)})
searchHandler.addFocusHandler()