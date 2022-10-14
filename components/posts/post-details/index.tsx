import { Post } from '../../../types'
import classes from './post-details.module.css'
import PostDetailsHeader from './post-header'
import { Fragment } from 'react'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

interface PostDetailsProps {
  post: Post
}

SyntaxHighlighter.registerLanguage('js', js)

function PostDetails({ post }: PostDetailsProps) {
  const customRenderer = {
    // image(image: HTMLImageElement) {
    //   return <Image src={ `/images/posts/${ post.slug }/${ image.src }` } width={ 600 } height={ 300 } alt={ image.alt } />
    // },
    p(para: any) {
      const { node } = para
      if (node?.children[0].tagName === 'img') {
        const image = node.children[0]

        return (
        <div className={ classes.image }>
          <Image src={ `/images/posts/${ post.slug }/${ image.properties.src }` } width={ 600 } height={ 300 } alt={ image.alt } />
        </div>
        )
      }

      return <p>{ para.children }</p>
    },
    code(code: any) {
      const { className, children } = code

      return (
      <SyntaxHighlighter
        language={ className.split("-")[1] }
        style={ atomDark }
      >
        { children }
      </SyntaxHighlighter>
      )
    }
  }

  return (
  <article className={ classes.content }>
    <PostDetailsHeader post={ post } />

    { post.content && (
      <Fragment>
        <ReactMarkdown components={ customRenderer }>
          { post.content }
        </ReactMarkdown>
      </Fragment>
    )}
  </article>
  )
}

export default PostDetails