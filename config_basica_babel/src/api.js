import axios from "axios";

const api = axios.create({
    // O axios create serve para já deixar um endereço de requisição previamente cadastrado
    baseURL: "http://api.github.com",
});

export default api;

