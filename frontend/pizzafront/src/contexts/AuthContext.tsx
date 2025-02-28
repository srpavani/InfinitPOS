import { createContext, ReactNode, useState } from 'react';

import { api } from '../services/apiClient';

import { destroyCookie, setCookie, parseCookies } from 'nookies'
import Router from 'next/router';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: signUpProps) => Promise<void>
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

type SignInProps = {
  email: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

type signUpProps={
  name: string;
  email: string;
  password: string;
}



export const AuthContext = createContext({} as AuthContextData)


export function signOut(){
  try{
    destroyCookie(undefined, '@nextauth.token')
    Router.push('/')
  }catch{
    console.log('erro ao deslogar')
  }
}

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps){
    try{
      const response = await api.post('/session', {
        email,
        password
      })
      // console.log(response.data);

      const { id, name, token } = response.data;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mes
        path: "/" // Quais caminhos terao acesso ao cookie
      })

      setUser({
        id,
        name,
        email,
      })

      //Passar para proximas requisiçoes o nosso token
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      toast.success("Logado com sucesso")

      //Redirecionar o user para /dashboard
      Router.push('/dashboard')


    }catch(err){
      toast.error('erro ao acessar')
      console.log("ERRO AO ACESSAR ", err)
    }
  }

  async function signUp({name, email, password}: signUpProps){
    try{
      const response = await api.post('/users',{
        name,
        email,
        password,
      })
      toast.success('Conta criada com sucesso')
      
      Router.push('/')
    }catch(err){
      toast.error('erro ao cadastrar')
      console.log("error ao cadastrar", err)
    }
    
  }
  


  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}