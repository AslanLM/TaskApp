import axios from 'axios'

const instance = axios.create({
    baseURL: "task-app-ecru-six.vercel.app/api",
    withCredentials: true
})

export default instance