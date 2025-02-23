"use client";

import { useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsGridProps {
  posts: Post[];
}

const dummyHashtags = ["#tech", "#life", "#news"];

export default function PostsGrid({ posts }: PostsGridProps) {
  const postsWithTags = posts.map((post) => {
    const hashtags: string[] = [];
    if (post.id % 3 === 0) hashtags.push("#tech");
    if (post.id % 3 === 1) hashtags.push("#life");
    if (post.id % 3 === 2) hashtags.push("#news");
    return { ...post, hashtags };
  });

  const [filter, setFilter] = useState<string | null>(null);

  const filteredPosts = filter
    ? postsWithTags.filter((post) => post.hashtags.includes(filter))
    : postsWithTags;

  return (
    <div>
      <div className="mb-4">
        {dummyHashtags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className="mr-2 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
          >
            {tag}
          </button>
        ))}
        {filter && (
          <button
            onClick={() => setFilter(null)}
            className="ml-2 px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Clear Filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded p-4 shadow hover:shadow-lg"
          >
            <Link href={`/post/${post.id}`}>
              <span className="text-xl font-semibold hover:underline">
                {post.title}
              </span>
            </Link>
            <p className="mt-2">{post.body.substring(0, 100)}...</p>
            <div className="mt-2">
              {post.hashtags.map((tag) => (
                <span key={tag} className="text-sm text-blue-500 mr-2">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/post/${post.id}`}>
              <span className="text-blue-500 mt-2 inline-block">Read More</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
