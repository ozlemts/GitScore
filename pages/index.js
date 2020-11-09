import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="text-3xl font-bold">NEXT.JS DENEME</div>
        <div className="flex flex-row bg-gray-200">
            <a href="/about"><div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">ABOUT</div></a>
            <a href="/users"><div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">USERS</div></a>
        </div>
    </div>
  )
}
