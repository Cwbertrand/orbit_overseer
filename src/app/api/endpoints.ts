import axios, { AxiosResponse } from "axios";

//creating a base url for endpoints
axios.defaults.baseURL = 'https://space-operators-bb2423167918.herokuapp.com';

// Getting the response from axios
const  responseData = <T> (response: AxiosResponse<T>) => response.data;

// Storing the request which is to be passed through axios.
// A snippet for data types and their responses
const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseData),
    post: <T> (url: string, data: {}) => axios.post<T>(url, data).then(responseData),

    postWithOutData: <T> (url: string) => axios.post<T>(url).then(responseData),

    put: <T> (url: string, data: {}) => axios.put<T>(url, data).then(responseData),
    delete: <T> (url: string) => axios.delete<T>(url).then(responseData)
}

interface GameResponse {
    id: string;
}
const CreateGame = {
    createGame: () => requests.postWithOutData<GameResponse>('/create-game'),
}

const agent = {
    CreateGame,
}

export default agent;