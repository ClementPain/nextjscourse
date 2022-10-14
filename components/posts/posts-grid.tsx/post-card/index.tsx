import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../../../../types'
import classes from './post-card.module.css'

function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date!).toLocaleDateString('fr-EU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${ post.slug }/${ post.image }`

  return (
  <li className={ classes.post }>
    <Link href={ `/posts/${post.slug}` }>
      <a>
        <div className={ classes.image }>
          <Image
            src={ imagePath }
            width={ 300 }
            height={ 200 }
            layout="responsive"
            alt={ post.title }
          />
        </div>

        <div className={ classes.content }>
          <h3>{ post.title }</h3>
          <time>{ formattedDate }</time>
          <p>{ post.excerpt }</p>
        </div>
      </a>
    </Link>
  </li>
  )
}

export default PostCard