import type { NextPage } from 'next'
import { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util'
import { Post } from '../types'

const Home = ({ featuredPostsList }: { featuredPostsList : Post[] }) => {
  return (
  <Fragment>
    <Hero />
    <FeaturedPosts posts={ featuredPostsList } />
  </Fragment>
  )
}

export function getStaticProps() {
  const featuredPostsList = getFeaturedPosts()

  return {
    props: {
      featuredPostsList 
    },
    revalidate: 800
  }
}

export default Home
