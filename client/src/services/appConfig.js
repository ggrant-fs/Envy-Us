import axios from 'axios'

let apiUrl


const apiUrls ={
    //when the application is on surge or netlify 
    production: '  https://envy-us-gary--app.herokuapp.com/api',
    //the the application is on the local host
    development: 'http://localhost/3000'
}
//https://git.heroku.com/envy-us-gary--app.git


if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})


export default api