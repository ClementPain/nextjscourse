import { Post } from '../../../types'
import PostCard from './post-card'
import classes from './posts-grid.module.css'

function PostsGrid({ posts }: { posts: Post[] }) {
  return (
  <ul className={ classes.grid }>
    { posts && posts.length > 0 && posts.map((p) => <PostCard post={ p } key={ p.slug } />) }
  </ul>
  )
}

export default PostsGrid