import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Base URL for Strapi API
const getToken = () => {
    return localStorage.getItem('jwt');
};
// General method for GET requests (Fetch data)
export const fetchData = async (url: string) => {
    let data: any;
    let loading: any;
    let error: any;
    let status: number | null = null;
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
        if (headers) {
            const response = await axios.get(`${API_URL}${url}`, { headers });
            data = response.data;
            status = response.status;
        }

    } catch (err) {
        error = err instanceof Error ? err.message : "Failed to fetch data";
    } finally {
        loading = false;
    }

    return { data, loading, error, status };
};

// General method for POST requests (Create data)
export const postData = async (url: string, dataToPost: any) => {
    let data: any;
    let loading: any;
    let error: any;
    let status: number | null = null;
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
        const response = await axios.post(`${API_URL}${url}`, dataToPost, { headers });
        data = response.data;
        status = response.status;

    } catch (err) {
        error = err instanceof Error ? err.message : "Failed to post data";
    } finally {
        loading = false;
    }
    return { data, loading, error, status };

};

// General method for PUT requests (Update data)
export const putData = async (url: string, dataToPut: any) => {
    let data: any;
    let loading: any;
    let error: any;
    let status: number | null = null;
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
        const response = await axios.put(`${API_URL}${url}`, dataToPut, { headers });
        data = response.data;
        status = response.status;

    } catch (err) {
        error = err instanceof Error ? err.message : "Failed to update data";
    } finally {
        loading = false;
    }

    return { data, loading, error, status };

};

// General method for DELETE requests (Delete data)
export const deleteData = async (url: string) => {
    let data: any;
    let loading: any;
    let error: any; let status: number | null = null;
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
        const response = await axios.delete(`${API_URL}${url}`, { headers });
        data = response.data;
        status = response.status;

    } catch (err) {
        error = err instanceof Error ? err.message : "Failed to delete data";
    } finally {
        loading = false;
    }

    return { data, loading, error, status };

};
