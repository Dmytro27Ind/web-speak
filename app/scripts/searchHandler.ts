import * as $ from 'jquery'

const buttonSelector = '[rel="js-search-button"]'
const inputSelector = '[rel="js-search-input"]'

export default class SearchHandler{
    $searchContainer: JQuery<any>

    constructor(selector: String){
        if(!selector)
            throw new Error('No selector provided')
        this.$searchContainer = $(selector)
        if(this.$searchContainer.length === 0)
            throw new Error('Could not find element with selector: ' + selector)
    }

    addSubmitHandler(fn: (value: String) => void){
        console.log('Setting submit handler for search button')
        this.$searchContainer.find(buttonSelector).on('click', (event) => {
            fn((<HTMLInputElement>this.$searchContainer.find(inputSelector)[0]).value)
        })
    }

    addFocusHandler(){
        console.log('Setting focus handler for search')
        this.$searchContainer.find(inputSelector).on('focus', (event) => {
            // console.log('focus')
            this.$searchContainer[0].style.border = "1px solid #7868E6"
        })
        this.$searchContainer.find(inputSelector).on('focusout', (event) => {
            // console.log('focusout')
            this.$searchContainer[0].style = undefined
        })
    }
}