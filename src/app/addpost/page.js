import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
//add a post
export default function AddPost() {
  async function handleAddPost(formData) {
    "use server";

    const username = formData.get("username");
    const message = formData.get("message");

    await sql`INSERT INTO posts (username, message) VALUES (${username}, ${message})`;

    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <div>
      {/* <h1>This is the Add Post route.</h1> */}
      <h2>Add Post!</h2>
      <form action={handleAddPost}  className="form">
        <label htmlFor="username">Username:</label>
        <input name="username" id="username" placeholder="Username" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" placeholder="Message" />

        <button type="submit">Add Message!</button>
      </form>
    </div>
  );
}
