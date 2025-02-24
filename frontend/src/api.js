import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api";

const api = axios.create
({
    baseURL: API_URL,
    headers:
    {
        "Content-Type": "application/json",
    },
});

const getAllData = async() =>
{
        try
        {
                const response = await api.get("/reservation");
                return response.data;
        }
        catch (error)
        {
                console.error("Error while getting data", error);
                return null;
        }
}

export default getAllData;