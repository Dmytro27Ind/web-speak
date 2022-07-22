import * as $ from 'jquery'

export default class SwitchThemeHandler{
    $checkboxSwitch: JQuery<any>

    constructor(selector: String){
        if(!selector)
            throw new Error('No selector provided')
        this.$checkboxSwitch = $(selector)
        if(this.$checkboxSwitch.length === 0)
            throw new Error('Could not find element with selector: ' + selector)
        //* default theme color
        document.documentElement.className = 'light'
    }

    addClickHandler() : void{
        console.log('Setting click handler for theme checkbox switch')
        this.$checkboxSwitch.on('click', (event) => {
            if (this.$checkboxSwitch[0].checked)
                document.documentElement.className = 'light'
            else
                document.documentElement.className = 'dark'
        })
    }
}