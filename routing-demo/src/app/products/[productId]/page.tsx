export default function ProductDetailsPage({
   params,
}: // `params` is provided by Next.js
{
   params: { productId: string };
}) {
   return <div>Details of {params.productId}</div>;
}
