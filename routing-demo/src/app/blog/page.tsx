import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Blog',
   // title: {
   //    absolute: 'Blog', // overrides 'template'
   // },
};

export default function Blog() {
   return <div>Blog</div>;
}
