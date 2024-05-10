import { sql } from "@vercel/postgres";
import Link from "next/link";
//view all posts on the page
export default async function Posts() {
  const posts = await sql`SELECT * FROM posts `;
  return (
    <div>
      <h1>This is the posts page route for all posts.</h1>
      {posts.rows.map((post) => {
        return (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <h3>{post.username}</h3>
            <p>{post.message}</p>
          </Link>
        );
      })}
    </div>
  );
}
