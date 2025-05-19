import BlogHeader from '@/components/common/BlogHeader';
import DrawerNav from '@/components/common/DrawerNav';
import Sidebar from '@/components/common/Sidebar';
import BlogCard from '@/components/posts/BlogCard';

const recentPosts = [
  {
    id: 1,
    title: 'Next.js와 TypeScript로 블로그 만들기',
    date: '2024-05-01',
    tags: ['Next.js', 'TypeScript'],
    description: 'Next.js와 TypeScript를 사용하여 개인 블로그를 만드는 과정을 기록합니다.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 2,
    title: 'React Hooks 완벽 가이드',
    date: '2024-05-10',
    tags: ['React', 'JavaScript'],
    description: 'React Hooks의 기본 개념부터 고급 사용법까지 정리했습니다.',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 3,
    title: 'Tailwind CSS로 모던 UI 구현하기',
    date: '2024-05-15',
    tags: ['CSS', 'Tailwind'],
    description: 'Tailwind CSS를 활용한 모던하고 반응형 웹 디자인 구현 방법을 소개합니다.',
    image: 'https://via.placeholder.com/400x300'
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BlogHeader />
        <DrawerNav />
        
        <div className="flex gap-8">
          
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map(post => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
