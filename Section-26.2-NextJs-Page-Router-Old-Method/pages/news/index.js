// our-domain.com/news
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a Great FrameWork
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something Else</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
