import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-24 md:py-40 text-center">
      <h1 className="font-semibold leading-none">
        <span className="block text-6xl md:text-8xl lg:text-9xl">404</span>
        <span className="block mt-4 text-2xl md:text-3xl text-gray-700">Not found</span>
      </h1>
      <div className="mt-10">
        <Link href="/" className="text-blue-600 underline">Back to Home</Link>
      </div>
    </main>
  )
}
