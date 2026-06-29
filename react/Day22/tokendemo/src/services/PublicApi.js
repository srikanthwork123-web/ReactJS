import axios from "axios";

const PublicApi = axios.create({
    baseURL: 'http://localhost:5116/api'
});

export default PublicApi;