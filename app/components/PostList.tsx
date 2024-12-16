import Link from 'next/link'

interface Post {
  id: number
  title: string
  body: string
}

interface PostListProps {
  posts: Post[]
}

export default function PostList({posts}: PostListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {posts.map((post) => (
        <div key={post.id}
          className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-2 text-gray-800 line-clamp-2'>
              {post.title}
            </h2>
            <p className='text-gray-600 mb-4 line-clamp-3'>{post.body}</p>
            <Link href={`/posts/${post.id}`}
              className='inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300'> Read More </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

