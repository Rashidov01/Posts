import Link from 'next/link'

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='text-5xl font-bold mb-4 text-gray-800'>Welcome to see my work</h1>
        <h2 className='text-3xl mb-5 text-gray-500'>Abdulloh Rashidov</h2>
        <Link href='/posts'
          className='inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300'> View all posts </Link>
      </div>
    </div>
  )
}

