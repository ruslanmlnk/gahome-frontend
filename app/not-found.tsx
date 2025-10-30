import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">Страница не найдена</h1>
      <p className="text-gray-600 mb-8">Ошибка 404. Такой страницы нет.</p>
      <Link href="/" className="text-blue-600 underline">
        На главную
      </Link>
    </main>
  )
}

