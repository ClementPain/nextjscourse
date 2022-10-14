import { Post } from '../../../types'
import PostsGrid from '../../posts/posts-grid.tsx'
import classes from './featured-posts.module.css'

function FeaturedPosts({ posts }: { posts: Post[] }) {
  return (
  <section className={ classes.latest }>
    <h2>Featured Posts</h2>
    
    <div>
      <PostsGrid posts={ posts } />
    </div>
  </section>
  )
}

export default FeaturedPosts