export default function ReviewDetails({
   params,
}: {
   params: { productId: string; reviewId: string };
}) {
   return (
      <div>
         Review {params.reviewId} of product {params.productId}
      </div>
   );
}
