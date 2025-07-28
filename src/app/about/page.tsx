// src/app/about/page.tsx
import styles from '../style.module.css';

export const metadata = {
  title: "About | 내 블로그", 
  description : "이 페이지는 사이트 소개 페이지입니다."
};

export default function AboutPage() {
  return (
    <main className="p-10">
      <h1 className={styles.msg}>About 페이지입니다</h1>
      <p className={styles.title}>이것은 다른 메세지 입니다.</p>
      <p className="text-gray-600 mt-4">이 페이지는 App Router 방식으로 작성되었습니다</p>
    </main>
  );
}