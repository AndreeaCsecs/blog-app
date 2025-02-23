import PostsGrid from "@/components/PostsGrid";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const posts: { id: number; title: string; body: string }[] = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <PostsGrid posts={posts} />
    </div>
  );
}
