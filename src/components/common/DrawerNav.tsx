import Link from 'next/link';

export default function DrawerNav() {
  return (
    <nav className="flex gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-8">
      <div className="flex-1 flex gap-4">
        <Link href="/posts" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors group">
          <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-orange-500"></span>
          <span className="font-medium text-gray-700 group-hover:text-orange-600">Posts</span>
        </Link>
        <Link href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors group">
          <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-orange-500"></span>
          <span className="font-medium text-gray-700 group-hover:text-orange-600">Projects</span>
        </Link>
        <Link href="/about" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors group">
          <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-orange-500"></span>
          <span className="font-medium text-gray-700 group-hover:text-orange-600">About</span>
        </Link>
      </div>
    </nav>
  );
} 