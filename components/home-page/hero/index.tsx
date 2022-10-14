import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
  return (
  <section className={ classes.hero }>
    <div className={ classes.image }>
      <Image src="/images/site/img_vaches.jpg" height={ 300 } width={ 300 } alt="image of me" />
    </div>

    <h1>Hi, I&#8217;m Clément</h1>
    <p>I blog about frameworks</p>
  </section>
  )
}

export default Hero