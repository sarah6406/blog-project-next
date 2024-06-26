
import "./globals.css";
import Link from "next/link";



export const metadata = {
  title: "Gardening Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <nav>
          <Link href="/">Home</Link> | <Link href="/posts">Posts</Link> | <Link href="/addpost">Add Post</Link>
        </nav>

        {children}
        <footer><p>© 2024 Database-Driven Enterprises Ltd.</p></footer>
      </body>
    </html>
  );
}
