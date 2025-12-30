import axios from "axios";
const baseUrl="http://localhost:5001/api/notes";
const api=axios.create({
    baseURL:baseUrl
});
export default api;