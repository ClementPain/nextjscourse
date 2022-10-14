import { Post } from '../../../types'
import PostsGrid from '../posts-grid.tsx'
import classes from './all-posts.module.css'

function AllPosts({ posts }: { posts: Post[] }) {
  return (
  <section className={ classes.posts }>
    <h1>All Posts</h1>

    <PostsGrid posts= { posts } />
  </section>
  )
}

export default AllPosts