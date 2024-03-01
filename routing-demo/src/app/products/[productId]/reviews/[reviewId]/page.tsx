import { notFound } from 'next/navigation';

function getRandomInt(count: number) {
   return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
   params,
}: {
   params: { productId: string; reviewId: number };
}) {
   const random = getRandomInt(2);

   if (random === 1) {
      throw new Error('Error loading review');
   }

   if (params.reviewId > 1000) {
      notFound();
      // folder level 'not-found page' > app folder 'not-found page'
   }
   return (
      <div>
         Review {params.reviewId} of product {params.productId}
      </div>
   );
}
