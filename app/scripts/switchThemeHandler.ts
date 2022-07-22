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
        if (this.#getTheme() == undefined){
            document.documentElement.className = 'light'
            this.$checkboxSwitch[0].checked = true
        } else {
            let theme = this.#getTheme()
            document.documentElement.className = theme
            if (theme == 'light')
                this.$checkboxSwitch[0].checked = true
            else
                this.$checkboxSwitch[0].checked = false
        }
    }

    addClickHandler() : void{
        console.log('Setting click handler for theme checkbox switch')
        this.$checkboxSwitch.on('click', (event) => {
            if (this.$checkboxSwitch[0].checked){
                this.#setTheme('light')
                document.documentElement.className = 'light'
            } else {
                this.#setTheme('dark')
                document.documentElement.className = 'dark'
            }
        })
    }

    #setTheme(theme: string) : void {
        localStorage.setItem('theme', theme)
    }

    #getTheme() : string {
        const theme = localStorage.getItem('theme')
        if (theme)
            return theme
        else
            return undefined
    }
}