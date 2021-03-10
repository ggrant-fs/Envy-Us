import axios from 'axios'

let apiUrl


const apiUrls ={
    production: 'https://git.heroku.com/envy-us-gary--app.git',
    development: 'http://localhost/3001'
}


if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

console.log(api)
export default api