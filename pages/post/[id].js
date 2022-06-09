import { getPostIds, getPostById } from "./../../lib/post";
const DetailPost = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
};
export default DetailPost;
