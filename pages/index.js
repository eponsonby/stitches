import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta> */}
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        {/* <p>[Your Self Introduction]</p> */}
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, image }) => (
            <li className={utilStyles.listItem} key={id}>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            <br />
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <Image
              priority
              // The image component requires the '/'
              src={"/" + image}
              className={utilStyles.postImage}
              height={665}
              width={1000}
              alt={title}
            />
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}