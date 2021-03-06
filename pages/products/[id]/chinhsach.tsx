import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'
 

export default function chinhsach(){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  console.log("router", router.query.id)
  function handleOnClick(){
    router.push("/products")
  }
    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1>Trang chinh sach san pham</h1>
            <h2 onClick={handleOnClick}>Tro ve</h2>
            <Link href="/">
              <a>Trang chu</a>
            </Link>

          </main>
    
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
      )
}


