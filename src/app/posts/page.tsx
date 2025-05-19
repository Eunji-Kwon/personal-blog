import PostList from '@/components/posts/PostList';

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Archive</h1>
      <PostList />
    </main>
  );
} 