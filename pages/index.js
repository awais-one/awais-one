import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <Head>
        <title>Awais One - MVP</title>
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-gray-800">Velkommen til Awais One</h1>
        <p className="mt-4 text-lg text-gray-600">AI-basert hverdagsassistent med trening, refleksjon og mat</p>
      </main>
    </div>
  )
}
