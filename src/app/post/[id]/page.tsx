import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const posts: Post[] = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: PageProps) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });
  const post: Post = await res.json();

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <span className="text-blue-500">← Back to Home</span>
      </Link>
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <p className="mt-2">{post.body}</p>
      <div className="mt-4">
        <p>
          <span className="font-bold">Post ID:</span> {post.id}
        </p>
        <p>
          <span className="font-bold">Author ID:</span> {post.userId}
        </p>
      </div>
    </div>
  );
}
