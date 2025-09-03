import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const expertAPI = (params) => {

    return axios.get(`${baseUrl}searchexperts?${params}`);
}

export const locationAPI = () => {
    return axios.get(`${baseUrl}locations`)
}

export const categoryAPI = () => {
    return axios.get(`${baseUrl}categories`)
}

export const serviceTypeAPI = (id) => {
    return axios.post(`${baseUrl}sub-categories?parent_id=${id}`)
}
export const pricingTypeAPI = () => {
    return axios.get(`${baseUrl}rate-types`)
}
