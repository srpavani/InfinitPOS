import Head from "next/head";

import styles from '../styles/Home.module.scss'
import LogoImg from '../../public/logo.svg'
import Image from "next/image";
import {Input} from '../components/ui/Input'
import { Button } from '../components/ui/button'
import Link from "next/link";



export default function Home() {
  return (
    //<div className={styles.container}>
    <>
    <Head>
      <title>Pizzaria - login</title>
    </Head>

    <div className={styles.containerCenter}>
      <Image src={LogoImg} alt="LogoPizzaria"/>
      <div className={styles.login}>
      <form>
        <Input placeholder="Digite seu email"
        type="text"
        />
        <Input placeholder="Digite sua senha"
        type="password"
        />

        <Button type='submit' Loading={true}>
          Acessar
        </Button>

      </form>
    
      <Link href="/signup" className={styles.text}>Nao possui uma conta? cadastre-se</Link>

      </div>




    </div>




    </>
  );
}
