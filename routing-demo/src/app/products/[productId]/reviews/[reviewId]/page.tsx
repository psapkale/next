import { notFound } from 'next/navigation';

export default function ReviewDetails({
   params,
}: {
   params: { productId: string; reviewId: number };
}) {
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
