import axios, { AxiosRequestConfig } from "axios";

interface ApiConfig extends AxiosRequestConfig {
    url: string,
    method?: 'GET' | 'POST' | 'Put' | 'DELETE';
}
const BASE_URL = 'https://api-dev.flitter.fr/'

export const apiClient = async <T>({ url, method = 'GET', data = null, headers = {}, params = null }: ApiConfig): Promise<T> => {
    try {
        const response = await axios({
            url: `${BASE_URL}${url}`,
            method,
            params,
            data,
            headers: {
                ...headers,

            }

        })
        return response.data
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        }
        throw new Error('Network Error');
    }

}