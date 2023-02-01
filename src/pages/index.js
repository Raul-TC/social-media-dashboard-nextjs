import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import DetailsCard from '@/components/DetailsCard'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], preload: true })

export default function Home({ cards, details }) {

  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
        <meta name="description" content="Social Media Dashboard Design with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} m-auto`}>
        <Header />
        <Layout>
          <div className='grid  grid-cols-1 xl:grid-cols-4 place-content-between gap-8 sm:grid-cols-2  -mt-10 md:-mt-[120px] ml-auto mr-auto text-center'>
            {cards.map((card, index) => <Card key={card.mediaName + index} icon={card.icon} mediaName={card.mediaName} isUp={card.isUp} userName={card.username} type={card.type} followers={card.followers} recentNotify={card.recentNotify} arrow={card.arrow} />)}
          </div>
          <h2 className='dark:text-text-light text-titles-dark font-bold text-2xl my-6 md:mt-10'>Overview -  Today</h2>
          <div className='grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 md:flex-row md:justify-between items-center flex-wrap gap-8 mb-12'>
            {details.map((detail, index) => <DetailsCard key={detail.mediaName + index} mediaName={detail.mediaName} icon={detail.icon} arrow={detail.arrow} isUp={detail.isUp} sectionName={detail.sectionName} state={detail.state} percentage={detail.percentage} />)}
          </div>
        </Layout>

      </main>
    </>
  )
}


export async function getStaticProps() {

  const cards = [
    {
      icon: './../assets/facebook-svgrepo-com.svg',
      mediaName: 'facebook',
      username: 'nathanf',
      type: 'followers',
      followers: 1987,
      recentNotify: 12,
      arrow: './../assets/icon-up.svg',
      isUp: true
    },
    {
      icon: './../assets/twitter-svgrepo-com.svg',
      mediaName: 'twitter',
      username: 'nathanf',
      type: 'followers',
      followers: 1044,
      recentNotify: 99,
      arrow: './../assets/icon-up.svg',
      isUp: true

    },
    {
      icon: './../assets/instagram-svgrepo-com.svg',
      mediaName: 'instagram',
      username: 'realnathanf',
      type: 'followers',
      followers: 11000,
      recentNotify: 1099,
      arrow: './../assets/icon-up.svg',
      isUp: true

    },
    {
      icon: './../assets/youtube-svgrepo-com.svg',
      mediaName: 'youtube',
      username: 'Nathan F.',
      type: 'subscribers',
      followers: 8239,
      recentNotify: 144,
      arrow: './../assets/icon-down.svg',
      isUp: false

    }
  ]
  const details = [
    {
      mediaName: 'facebook-views',
      icon: './../assets/facebook-svgrepo-com.svg',
      arrow: './../assets/icon-up.svg',
      isUp: true,
      sectionName: 'Page Views',
      state: 87,
      percentage: '3%',
    },
    {
      mediaName: 'facebook-likes',
      icon: './../assets/facebook-svgrepo-com.svg',
      arrow: './../assets/icon-down.svg',
      isUp: false,
      sectionName: 'Likes',
      state: 52,
      percentage: '2%',
    },
    {
      mediaName: 'instagram-likes',
      icon: './../assets/instagram-svgrepo-com.svg',
      arrow: './../assets/icon-up.svg',
      isUp: true,
      sectionName: 'Likes',
      state: 5462,
      percentage: '2257%',
    },
    {
      mediaName: 'instagram-views',
      icon: './../assets/instagram-svgrepo-com.svg',
      arrow: './../assets/icon-up.svg',
      isUp: true,
      sectionName: 'Profile Views',
      state: 52000,
      percentage: '1375%',
    },
    {
      mediaName: 'retweets',
      icon: './../assets/twitter-svgrepo-com.svg',
      arrow: './../assets/icon-up.svg',
      isUp: true,
      sectionName: 'Retweets',
      state: 117,
      percentage: '303%',
    },
    {
      mediaName: 'twitter-likes',
      icon: './../assets/twitter-svgrepo-com.svg',
      arrow: './../assets/icon-up.svg',
      isUp: true,
      sectionName: 'Likes',
      state: 507,
      percentage: '553%',
    },
    {
      mediaName: 'youtube-likes',
      icon: './../assets/youtube-svgrepo-com.svg',
      arrow: './../assets/icon-down.svg',
      isUp: false,
      sectionName: 'Likes',
      state: 107,
      percentage: '19%',
    },
    {
      mediaName: 'youtube-views',
      icon: './../assets/youtube-svgrepo-com.svg',
      arrow: './../assets/icon-down.svg',
      isUp: false,
      sectionName: 'Total Views',
      state: 1407,
      percentage: '12%',
    }
  ]
  return {
    props: {
      cards,
      details
    }
  }
}