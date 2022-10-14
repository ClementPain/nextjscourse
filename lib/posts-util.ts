import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '../types'

const postsDirectoryPath = path.join(process.cwd(), '/posts')

export function getPostsFiles() {
  return fs.readdirSync(postsDirectoryPath)
}

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, '')
  const postPath = path.join(postsDirectoryPath, `${postSlug}.md`)
  const postContent = fs.readFileSync(postPath, 'utf-8')
  const { data, content } = matter(postContent) 
  const postData: Post = {
    slug: postSlug,
    ...data,
    content
  }
  
  return postData
}

export function getAllPosts() {
  const postsPaths = getPostsFiles()
  const postsDatas: Post[] = postsPaths.map((path) => {
    return getPostData(path)
  })
  const sortedPosts = postsDatas.sort((postA, postB) => {
    if (postA.date && postB.date) {
      return postA.date > postB.date ? -1 : 1
    }
    return 1
  })
      

  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter((post) => post.isFeatured)

  return featuredPosts
}