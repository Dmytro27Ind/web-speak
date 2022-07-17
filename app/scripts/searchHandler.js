import * as $ from 'jquery'

export default class SearchHandler{
    constructor(selector){
        if(!selector)
            throw new Error('No selector provided')
        this.$searchContainer = $(selector)
        if(this.$searchContainer.length === 0)
            throw new Error('Could not find element with selector: ' + selector)
    }
    addSubmitHandler(fn){
        console.log('Setting submit handler for search button')
        console.log(this.$searchContainer)
    }
}