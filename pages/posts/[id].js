// the filename must include [] in order for route to be dynamic
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'

// getPostData function is being used here (in getStaticProps)
// to get the post data and return it as props
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// Post component is using postData, defined above
export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <Image
              priority
              // The image component requires the '/'
              src={"/" + postData.image}
              className={utilStyles.postImage}
              height={665}
              width={1000}
              alt={postData.title}
            />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }