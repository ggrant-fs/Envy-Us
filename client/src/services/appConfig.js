import axios from 'axios'

let apiUrl


const apiUrls ={
    //when the application is on surge or netlify 
    production: 'https://envy--us.herokuapp.com/api',
    //the the application is on the local host
    development: 'http://localhost:3000'
}


if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.production
} else {
    apiUrl = apiUrls.development
}

const api = axios.create({
    baseURL: apiUrl
})


export default api