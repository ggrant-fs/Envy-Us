import api from './appConfig'

export const getArticles = async ()=>{
    try {
        const response = await api.get('/articles')
        return response.data
    } catch (error) {
        throw error
    }
}

export const getArticle = async id =>{
    try {
        const response = await api.get(`/product/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}