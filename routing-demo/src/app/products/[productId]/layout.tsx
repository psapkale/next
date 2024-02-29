export default function ProductsLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         {children}
         <h1>Features products</h1>
      </>
   );
}
