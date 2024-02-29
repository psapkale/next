'use client';

import { useRouter } from 'next/navigation';

export default function OrderProducts() {
   const router = useRouter();

   const handleClick = () => {
      alert('Placing your order, moving to home page');
      router.push('/');
      // router.replace('/'); // same behaviour as 'replace' in 'link'
      // router.back(); // move back in the history stack
      // router.forward(); // move forward in the history stack
   };

   return (
      <>
         <div>Order Products</div>
         <button onClick={handleClick}>Place Order</button>
      </>
   );
}
