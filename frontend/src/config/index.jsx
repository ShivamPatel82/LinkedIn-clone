const { default: axios } = require("axios");

export const BASE_URL = "http://localhost:3030"

export const clientServer = axios.create({
    baseURL: BASE_URL,
})
