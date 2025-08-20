import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
    baseURL: API_BASE_URL,
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

export const authAPI = {
    login: (credentials) => api.post('/login', credentials),
    logout: () => api.post('/logout'),
    getUser: () => api.get('/user'),
}