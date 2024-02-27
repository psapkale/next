export default function Docs({ params }: { params: { slugs: string[] } }) {
   console.log(params.slugs);

   if (params.slugs?.length === 2)
      return (
         <div>
            Viewing docs for feature {params.slugs[0]} and concept{' '}
            {params.slugs[1]}
         </div>
      );
   else if (params.slugs?.length === 1)
      return <div>Viewing docs for feature {params.slugs[0]}</div>;
   return <div>Docs home page {params.slugs}</div>;
}
