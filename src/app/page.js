'use client'

import styles from './page.module.css'
import GetFact from './GetFact'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>
      <main className={styles.main}>
        <div className="container">
          <h1>Cat Facts</h1>
          <GetFact/>
        </div>
      </main>
    </>
  )
}


