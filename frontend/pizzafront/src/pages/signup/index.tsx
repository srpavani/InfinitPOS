import Head from "next/head";
import { useState, FormEvent, useContext } from "react";
import styles from '@/styles/Home.module.scss'
import LogoImg from '../../../public/logo.svg'
import Image from "next/image";
import {Input} from '../../components/ui/Input'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {AuthContext} from '../../contexts/AuthContext';



export default function Signup() {

  const {signUp} = useContext(AuthContext);


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent ){
    event.preventDefault();
    if(name ==="" || email ==="" || password === ''){
      alert("preencha todos os campos")
      return;
    }

    setLoading(true);

    

    let data = {
      name,
      email,
      password
    }
    
    await signUp(data)

    setLoading(false);


  }



  return (
    //<div className={styles.container}>
    <>
    <Head>
      <title>Pizzaria - Registrar</title>
    </Head>

    <div className={styles.containerCenter}>
      <Image src={LogoImg} alt="LogoPizzaria"/>
      <div className={styles.login}>
        <h1>Criando sua Conta</h1>
      <form onSubmit={handleSignUp}>
        <Input placeholder="Digite seu email"
        type="text"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />

        <Input placeholder="Digite seu username"
        type="text"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />

        <Input placeholder="Digite sua senha"
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        

        <Button type='submit' Loading={Loading}>
          Cadastrar
        </Button>

      </form>
    
      <Link href="/" className={styles.text}>Ja possui conta ? faca login</Link>

      </div>




    </div>




    </>
  );
}
