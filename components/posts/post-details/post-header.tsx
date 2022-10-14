import Image from 'next/image'
import { Post } from '../../../types'
import classes from './post-details.module.css'

function PostDetailsHeader({ post }: { post: Post }) {
  const imagePath = `/images/posts/${ post.slug }/${ post.image }`
  console.log(imagePath)

  return (
  <header className={ classes.header }>
    <h1>{ post.title }</h1>

    <Image src={ imagePath } alt={ post.title } width={ 200 } height={ 150 } />
  </header>
  )
}

export default PostDetailsHeader