import api from './appConfig'

export const getArticles = async ()=>{
    try {
        const response = await api.get('/articles')
        console.log(response.data)
        return response.data
    } catch (error) {
        // throw error
        console.log(error)
    }
}

export const getArticle = async id =>{
    try {
        const response = await api.get(`/article/${id}`)
        return response.data
    } catch (error) {
        // throw error
        console.log(error)
    }
}