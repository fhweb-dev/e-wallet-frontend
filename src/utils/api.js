import axios from 'axios'

const api = axios.create({
    baseURL: 'https://e-wallet-backend-nu.vercel.app/'
})

export default api
