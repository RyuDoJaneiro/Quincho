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

export const getAllData = async () =>
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

export const getOne = async (dateValue) =>
{
        try
        {
                const response = await api.get('/reservation/getOne',
                {
                        params:
                        {
                                reservationDate: dateValue
                        }                        
                });                        
                return response.data;
        }
        catch (error)
        {
                console.error("Error while getting data", error);
                return null;
        }
}

export const createData = async (dateValue) =>
{
        try
        {
                const response = await api.post('/reservation',
                {
                        reservationDate: dateValue,
                        isOccupied: true                      
                });                        
                return response.data;
        }
        catch (error)
        {
                console.error("Error while getting data", error);
                return null;
        }
}

export const updateData = async (dateValue, isOccupied, id) =>
{
        try
        {
                const response = await api.put(`/reservation/${id}`,
                {
                        params:
                        {
                                reservationDate: dateValue,
                                isOccupied: isOccupied
                        }                        
                });                        
                return response.data;
        }
        catch (error)
        {
                console.error("Error while getting data", error);
                return null;
        }
}