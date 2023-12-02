const ENDPOINT = 'http://127.0.0.1:8000';
import axios from 'axios'
export async function getAllProduct() {
    try {
        const response = await axios.get(`${ENDPOINT}/admin/san-pham/du-lieu`);
        return response.data

    } catch (error) {
        console.log(error);
    }
}
export async function getAllCategories() {
    try {
        const response = await axios.get(`${ENDPOINT}/admin/the-loai/du-lieu`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export async function login(entity) {
    try {
        const response = await axios.post(`${ENDPOINT}/api/login`, entity);
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export async function register(entity) {
    console.log("🚀 ~ file: connect.jsx:29 ~ register ~ entity:", entity)
    try {
        const response = await axios.post(`${ENDPOINT}/api/register`, entity);
        return response.data
    } catch (error) {
        console.log(error);
    }
}