import Head from "next/head";
import styles from '@/styles/Home.module.scss'
import LogoImg from '../../../public/logo.svg'
import Image from "next/image";
import {Input} from '../../components/ui/Input'
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Signup() {
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
      <form>
        <Input placeholder="Digite seu email"
        type="text"
        />

        <Input placeholder="Digite seu username"
        type="text"
        />

        <Input placeholder="Digite sua senha"
        type="password"
        />
        

        <Button type='submit' Loading={true}>
          Cadastrar
        </Button>

      </form>
    
      <Link href="/" className={styles.text}>Ja possui conta ? faca login</Link>

      </div>




    </div>




    </>
  );
}
