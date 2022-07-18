import 'normalize.css'
import 'reset-css'
import '../stylesheets/fonts.css'
import '@/stylesheets/styles.sass'
import * as $ from 'jquery'
import SearchHandler from './searchHandler.ts'
import HeaderProfileHandler from './headerProfileHandler.ts'

const searchSelector = '[rel="js-search-container"]'
const inputSelector = '[rel="js-search-input"]'
const buttonSelector = '[rel="js-search-button"]'
const headerProfileSelector = '[rel="js-header-profile"]'
const headerPopupSelector = '[rel="js-header-popup"]'
const PopupAnyPlacesSelector = '[rel="js-popup-any-places"]'

let searchHandler = new SearchHandler(searchSelector)
let headerProfileHandler = new HeaderProfileHandler(headerProfileSelector)

searchHandler.addSubmitHandler((data) => {console.log(data)}, $(buttonSelector), $(inputSelector))
searchHandler.addFocusHandler($(inputSelector))
headerProfileHandler.addClickHandler($(headerPopupSelector))
headerProfileHandler.addPopupHandler($(headerPopupSelector), $(PopupAnyPlacesSelector))