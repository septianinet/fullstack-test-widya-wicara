import {FC} from 'react'
import Head from 'next/head'
import Header from '../../components/Header';

const Base:FC = ({children}) => {
  return(
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Flowery Widya Wicara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center text-center max-w-3xl mx-auto">
        {children}
      </main>
    </div>
  )
}

export default Base;