import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'
import { Post } from '../../types'

function AllPostsPage({ allPosts }: { allPosts: Post [] }) {
  return <AllPosts posts={ allPosts } />
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      allPosts
    },
    revalidate: 8000
  }
}

export default AllPostsPage