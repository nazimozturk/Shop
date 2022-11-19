import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGIyMDk0YTI3ZjA0MzU3ZmI5YTk4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODg1NjE1MywiZXhwIjoxNjY5MTE1MzUzfQ.XVw8zuU1UM5rG-xr5xHulKPlkW29X4mXQdi6viigkFA"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    },
});