
'use client';
// src/app/about/page.tsx
import styles from '../style.module.css';

// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="p-10">
      <h1 className="msg">About 페이지입니다</h1>
      <p className="title">이것은 다른 메세지 입니다.</p>
      <p className="text-gray-600 mt-4">이 페이지는 App Router 방식으로 작성되었습니다</p>

      <style jsx>{`
        .title {
          font-size: 2.0rem;
          font-weight: bold;
          margin: 0;
          padding: 1.25rem;
          color: white;
          background-color: #bfdbfe; /* Tailwind의 bg-blue-100과 유사 */
        }
        .msg {
          font-size: 2.0rem;
          margin: 1.25rem;
          color: #1f2937; /* Tailwind의 text-gray-900 */
          text-align: center;
        }
      `}</style>
    </main>
  );
}