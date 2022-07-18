
function fetchSidenav(){
    return new Promise((resolve, reject) => {
        fetch("../templates/sidenav-content.html").then(response => {
            return response.text()
        }).then(data => {
            document.querySelector('[rel="js-sidenav"]').innerHTML = data;
            resolve('fetch sidenav')
        });
    })
}

function fetchHeader(){
    return new Promise((resolve, reject) => {
        fetch("../templates/header-content.html").then(response => {
            return response.text()
        }).then(data => {
            document.querySelector('[rel="js-header"]').innerHTML = data;
            resolve('fetch header')
        });
    })
}

export default function fetchTemplates(){
    return new Promise((resolve, reject) => {
        fetchSidenav().then((data) => {
            console.log(data)
            return fetchHeader()
        }).then((data) => {
            console.log(data)
            resolve('fetch all templates')
        })
    })
}