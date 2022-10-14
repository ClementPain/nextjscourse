import { GetStaticPropsContext } from 'next'
import { Fragment } from 'react'
import PostDetails from '../../components/posts/post-details'
import { getPostData, getPostsFiles } from '../../lib/posts-util'
import { Post } from '../../types'

function PostDetailsPage({ post }: { post: Post }) {
  if (!post) return <p>Loading...</p>

  return (
  <Fragment>
    <PostDetails post={ post } />
  </Fragment>
  )
}


export function getStaticProps({ params }: GetStaticPropsContext) {
  const postSlug = params?.postSlug
  let post: Post | null = null
  if (typeof postSlug === "string") post = getPostData(postSlug)

  return {
    props: {
      post
    },
    revalidate: 600
  }
} 

export function getStaticPaths() {
  const postsSlugList = getPostsFiles()
  const pathsWithParams = postsSlugList.map((slug) => ({ "params": { "postSlug": slug.replace(/\.md$/, '') } }))

  return {
    paths: pathsWithParams,
    fallback: false
  }
}

export default PostDetailsPage