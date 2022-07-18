import * as $ from 'jquery'

export default class SearchHandler{
    $searchContainer: JQuery<any>

    constructor(selector: String){
        if(!selector)
            throw new Error('No selector provided')
        this.$searchContainer = $(selector)
        if(this.$searchContainer.length === 0)
            throw new Error('Could not find element with selector: ' + selector)
    }

    addSubmitHandler(fn: (value: String) => void, $button: JQuery<any>, $input: JQuery<any>) : void{
        console.log('Setting submit handler for search button')
        this.$searchContainer.find($button).on('click', (event) => {
            fn((<HTMLInputElement>this.$searchContainer.find($input)[0]).value);
            (<HTMLInputElement>this.$searchContainer.find($input)[0]).value = ''
        })
    }

    addFocusHandler($input: JQuery<any>) : void{
        console.log('Setting focus handler for search')
        this.$searchContainer.find($input).on('focus', (event) => {
            // console.log('focus')
            this.$searchContainer[0].style.border = "1px solid #7868E6"
            this.$searchContainer[0].style.borderRight = "0px"
        })
        this.$searchContainer.find($input).on('focusout', (event) => {
            // console.log('focusout')
            this.$searchContainer[0].style = undefined
        })
    }
}