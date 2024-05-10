import { sql } from "@vercel/postgres";
// import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//add a comment to an individual post
export default async function IndividualPostPage({ params }) {
  const allComments =
    await sql`SELECT * FROM comments WHERE post_id = ${params.id}`;

//   `SELECT * FROM comments
//       JOIN posts ON comments.post_id = posts.id
//       WHERE comments.post_id = posts.id`;

  async function handleAddComment(formData) {
    "use server";
    
    const username = formData.get("username");
    const comment = formData.get("comment");

    await sql`INSERT INTO comments ( post_id, username, comment) VALUES ( ${params.id}, ${username}, ${comment})`;

    //issue here? is it the wrong params i'm accessing?
    revalidatePath(`/posts/${params.id}`);
    redirect(`/posts/${params.id}`);
  }

  const result = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  const post = result.rows[0];
  return (
    <div>
      <h2>Individual post page</h2>
      <p>Post #{post.id}</p>
      <p>
        <strong>{post.username}</strong> has posted:
      </p>
      <p>{post.message}</p>

      <div>
        <h2>Add Comment!</h2>
        <form action={handleAddComment} className="form">
          <label htmlFor="username">Username:</label>
          <input name="username" id="username" placeholder="Username" />
          <label htmlFor="comment">Comment:</label>
          <textarea name="comment" id="comment" placeholder="Comment" />

          <button type="submit">Add Comment!</button>
        </form>
      </div>

      <div>
        <h1>This is the comments page route for all comments.</h1>
        {allComments.rows.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                <strong>{comment.username}</strong> says...
              </p>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
