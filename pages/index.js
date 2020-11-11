import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-screen w-screen" style={ {background: 'linear-gradient(to bottom right, #fb786b, #ca476b)'} }>
      <Head>
        <title>Git Score</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="text-3xl font-bold">Git Score</div>
        <div className="flex flex-row bg-gray-200">
            <a href="/about"><div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">ABOUT</div></a>
            <a href="/users"><div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">USERS</div></a>
            <button className="btn btn-blue">okfjer</button>
        </div>
    </div>
  )
}
