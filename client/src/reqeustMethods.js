import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGIyMDk0YTI3ZjA0MzU3ZmI5YTk4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODYyNDEyNSwiZXhwIjoxNjY4ODgzMzI1fQ.0pubrRImS6xFHAr6vWDWehN7ZxAribDTqQVyrGcYASM"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    },
});