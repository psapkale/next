import { Metadata } from 'next';

type Props = {
   params: {
      productId: string;
   };
};

// dynamic routing metadata
export const generateMetadata = async ({
   params,
}: Props): Promise<Metadata> => {
   const title = await new Promise((resolve) => {
      setTimeout(() => {
         resolve(`Item ${params.productId}`);
      }, 100);
   });
   return {
      title: `Product ${title}`,
   };
};
// ! you can not export both the metadata object and the generateMetadata function from the same route segment

export default function ProductDetailsPage({
   params,
}: // `params` is provided by Next.js
Props) {
   return <div>Details of {params.productId}</div>;
}
