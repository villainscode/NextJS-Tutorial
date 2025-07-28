import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

// ✅ 동적 metadata 함수
export function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: '404 | 글을 찾을 수 없습니다',
      description: '존재하지 않는 글입니다.',
    };
  }

  return {
    title: `${post.title} | 내 블로그`,
    description: post.content,
  };
}

// ✅ 본문 페이지
export default function BlogDetailPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.content}</p>
    </main>
  );
}

