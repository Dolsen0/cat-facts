'use client'

import styles from './page.module.css'
import GetFact from './components/GetFact.jsx'
import Head from 'next/head'
import GetBreeds from './components/GetBreeds'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>


      <main className={styles.main}>
          <h2>Cat Facts</h2>
        <div className="container">
          <GetFact/>
        </div>
          {/* <h2>Cat Breeds:</h2>
          <GetBreeds/> */}
      </main>
    </>
  )
}


