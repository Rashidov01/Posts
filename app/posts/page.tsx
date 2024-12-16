import PostList from '../components/PostList'

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  return res.json()
}

export default async function Posts() {
  const posts = await getPosts()

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-center text-gray-800'>All Posts</h1>
      <PostList posts={posts} />
    </div>
  )
}
