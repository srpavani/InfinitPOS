import axios, { AxiosError} from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./erros/AuthTokenError";
import {signOut} from '../contexts/AuthContext'



const baseURL = 'http://localhost:3333'
export function setupAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: `${baseURL}`,
        headers:{
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError)=>{
        if(error.response.status===401){
            if(typeof window !==undefined){
                //deslogar usuario
                signOut();
            }else{
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error);

    })
    
    return api;


}