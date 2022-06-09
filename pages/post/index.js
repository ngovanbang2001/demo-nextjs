import Head from "next/head";
import { getPosts } from "../../lib/post";
import Link from "next/link";
const Post = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/post/${post.id}`}>
              <button>See more</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: { posts },
  };
};
export default Post;
