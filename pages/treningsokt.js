import Link from 'next/link'

export default function Treningsokt() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <h1 className="text-2xl font-bold mb-4">🏋️ Treningsøkt</h1>
      <p className="mb-4">Gjennomfør øvelsen Jumping Jacks i 30 sekunder.</p>
      <img src="/jumping-jacks.png" alt="Jumping Jacks" className="mb-4 w-60 rounded-lg" />
      <Link href="/" legacyBehavior>
        <a className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">⬅️ Tilbake</a>
      </Link>
    </div>
  )
}
