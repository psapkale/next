'use client';

export default function ErrorBoundary({
   error,
   reset,
}: {
   error: Error;
   reset: () => void; // attempts to rerender the ErrorBoundary
}) {
   return (
      <div>
         {error.message} <button onClick={reset}>Try again</button>
      </div>
   );
}
