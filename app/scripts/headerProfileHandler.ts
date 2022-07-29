import * as $ from 'jquery'

export default class HeaderProfileHandler{
    $headerProfile: JQuery<any>

    constructor(selector: String){
        if(!selector)
            throw new Error('No selector provided')
        this.$headerProfile = $(selector)
        if (this.$headerProfile.length === 0)
            throw new Error('Could not find element with selector: ' + selector)
    }

    addClickHandler($popup: JQuery<any>, $header: JQuery<any>) : void{
        console.log('Setting click handler for header profile')
        this.$headerProfile.on('click', (event) => {
            $popup[0].style.visibility = 'visible'
            $popup[0].style.opacity = 1
            $header[0].style.height = "198px"
        })
    }

    addPopupHandler($popup: JQuery<any>, $anyPlaces: JQuery<any>, $header: JQuery<any>) : void{
        console.log('Setting handler for profile popup')
        $anyPlaces.on('click', (event) => {
            $popup[0].style.visibility = 'hidden'
            $popup[0].style.opacity = 0
            $header[0].style.height = "68px"
        })
    }
}