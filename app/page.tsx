import Link from 'next/link'

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='text-5xl font-bold mb-6 text-gray-800'>Welcome to our Blog</h1>
        <p className='text-xl text-gray-600 mb-8'>Explore our latest posts and stay updated with the newest trends.</p>
        <Link href='/posts'
          className='inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300'> View all posts </Link>
      </div>
    </div>
  )
}

