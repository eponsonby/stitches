// the filename must include [] in order for route to be dynamic
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

// getPostData function is being used here (in getStaticProps)
// to get the post data and return it as props
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
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
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    )
  }