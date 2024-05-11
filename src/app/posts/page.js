import { sql } from "@vercel/postgres";
import Link from "next/link";
//view all posts on the page
export default async function Posts() {
  const posts = await sql`SELECT * FROM posts `;
  return (
    <div>
      <h2>Check out these posts!</h2>
      
      {posts.rows.map((post) => {
        return (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <h4>
              {post.title} by <italic>{post.username}</italic>
            </h4>
            {/* <p>{post.message}</p> */}
            
          </Link>
          
        );
        
      })}
      {/* <a href="/posts?sort=asc">Sort ascending</a> | <a href="/posts?sort=desc">Sort descending</a> */}
    </div>
  );
}
