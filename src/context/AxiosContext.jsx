import { createContext } from 'react';
import axios from 'axios';

const AxiosContext = createContext({});
const baseUrl = process.env.REACT_APP_HZSM_HOSTNAME + ':' + process.env.REACT_APP_HZSM_PORT;

const AxiosProvider = ({ children }) => {
    const axiosInstance = axios.create();

    return(
        <AxiosContext.Provider value={{ axiosInstance }} >
            { children }
        </AxiosContext.Provider>
    )
}

export default AxiosContext;
export { AxiosProvider, baseUrl }