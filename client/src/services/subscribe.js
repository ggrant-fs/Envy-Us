import api from './appConfig'

export const createSubscription = async subscription =>{
    try {
        const response = await api.post('/', subscription)
        return response.data

    } catch (error) {
        throw error
    }
}