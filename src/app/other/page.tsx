import Link from "next/link";
import Image from "next/image";
export default function Other(){
    return (
        <main>
            <h1 className="title">Other page</h1>
            <p className="msg">이것은 다른 페이지 입니다.</p>
            <div>
                <Image src="/sample.jpg" width={200} height={200} alt="wait..."/>
            </div>
            <div>
                <a href="/">go back</a>
            </div>
        </main>
    )
}