import * as $ from 'jquery'
import SearchHandler from './searchHandler.ts'
import HeaderProfileHandler from './headerProfileHandler.ts'
import fetchTemplates from './fetchTemplates.js'
import SwitchThemeHandler from './switchThemeHandler.ts'

const searchSelector = '[rel="js-search-container"]'
const inputSelector = '[rel="js-search-input"]'
const buttonSelector = '[rel="js-search-button"]'
const headerProfileSelector = '[rel="js-header-profile"]'
const headerPopupSelector = '[rel="js-header-popup"]'
const PopupAnyPlacesSelector = '[rel="js-popup-any-places"]'
const switchCheckboxSelector = '[rel="js-switch-checkbox"]'

fetchTemplates().then((data) => {
    console.log(data)

    let searchHandler = new SearchHandler(searchSelector)
    let headerProfileHandler = new HeaderProfileHandler(headerProfileSelector)
    let switchThemeHandler = new SwitchThemeHandler(switchCheckboxSelector)

    searchHandler.addSubmitHandler((data) => {console.log(data)}, $(buttonSelector), $(inputSelector))
    searchHandler.addFocusHandler($(inputSelector))
    headerProfileHandler.addClickHandler($(headerPopupSelector))
    headerProfileHandler.addPopupHandler($(headerPopupSelector), $(PopupAnyPlacesSelector))
    switchThemeHandler.addClickHandler()
})