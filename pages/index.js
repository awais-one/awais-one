import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <Head>
        <title>Awais One - Hjem</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">🧠 Awais One</h1>
      <p className="mb-6">Din personlige assistent for helse, fokus og familie</p>
      <Link href="/treningsokt" legacyBehavior>
        <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Start treningsøkt</a>
      </Link>
    </div>
  )
}
