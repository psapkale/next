import Card from '@/components/Card';
import Link from 'next/link';

export default function () {
   return (
      <Card>
         <div className='relative w-full h-full flex items-center'>
            Notification
            <div className='absolute bottom-0 right-0 flex gap-2 text-sm'>
               <Link
                  href={'complex-dashboard/default-notifications'}
                  className='hover:underline'
               >
                  default
               </Link>
               <Link
                  href={'complex-dashboard/archived-notifications'}
                  className='hover:underline'
               >
                  archived
               </Link>
            </div>
         </div>
      </Card>
   );
}
