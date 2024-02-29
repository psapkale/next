import Link from 'next/link';

export default function Home() {
   return (
      <div>
         Home Page
         <br />
         <Link href={'/blog'}>Blog</Link>
         <Link href={'/products'}>Products</Link>
      </div>
   );
}
