import Head from "next/head";
import {useContext, FormEvent, useState} from 'react'
import styles from '../styles/Home.module.scss'
import LogoImg from '../../public/logo.svg'
import Image from "next/image";
import {Input} from '../components/ui/Input'
import { Button } from '../components/ui/button'
import {AuthContext} from '../contexts/AuthContext'


import Link from "next/link";



export default function Home() {

  const {signIn} = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ Loading, setLoading] = useState(false);


  async function handleLogin(event: FormEvent){
    if(email ===''|| password === ''){
      alert("Preencha todos os dados");
      return ;
    }

    setLoading(true);

    event.preventDefault();
    let data ={
      email,
      password
    }

    await signIn(data)
    
    setLoading(false)

  }

  return (

  
    //<div className={styles.container}>
    <>
    <Head>
      <title>Pizzaria - login</title>
    </Head>

    <div className={styles.containerCenter}>
      <Image src={LogoImg} alt="LogoPizzaria"/>
      <div className={styles.login}>
      <form onSubmit={handleLogin}>
        <Input placeholder="Digite seu email"
        type="text"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <Input placeholder="Digite sua senha"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <Button type='submit' Loading={Loading}>
          Acessar
        </Button>

      </form>
    
      <Link href="/signup" className={styles.text}>Nao possui uma conta? cadastre-se</Link>

      </div>




    </div>




    </>
  );
}
