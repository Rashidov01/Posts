import Link from 'next/link'

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }
  return res.json()
}

export default async function Post({params}: { params: { id: string } }) {
  const post = await getPost(params.id)

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='p-8'>
          <h1 className='text-3xl font-bold mb-4 text-gray-800'>{post.title}</h1>
          <p className='text-gray-600 mb-6 leading-relaxed'>{post.body}</p>
          <Link href='/posts'
            className='inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300'> Back to all posts </Link>
        </div>
      </div>
    </div>
  )
}