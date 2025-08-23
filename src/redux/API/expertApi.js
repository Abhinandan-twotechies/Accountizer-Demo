import axios from "axios";

export const expertAPI = () => {
    return axios.get("http://192.168.1.6:8001/api/searchexperts?page=1")
}