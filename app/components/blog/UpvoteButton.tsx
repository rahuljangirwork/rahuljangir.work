// // UpvoteButton.tsx
// 'use client';

// import { ThumbsUp } from 'lucide-react';     // ← rename here
// import { usePostMetrics } from '@/app/lib/usePostMetrics';

// export default function UpvoteButton({ slug }: { slug: string }) {
//   const { votes, upvote } = usePostMetrics(slug);

//   return (
//     <button
//       onClick={upvote}
//       className="flex items-center gap-1 text-sm hover:text-palette-4"
//     >
//       <ThumbsUp className="h-4 w-4" />       {/* ← and here */}
//       {votes}
//     </button>
//   );
// }


// app/components/blog/UpvoteButton.tsx
'use client';

import { ThumbsUp } from 'lucide-react';
import { usePostMetrics } from '@/app/lib/usePostMetrics';

export default function UpvoteButton({ slug }: { slug: string }) {
  const { votes, upvote, hasVoted } = usePostMetrics(slug);

  return (
    <button
      onClick={upvote}
      disabled={hasVoted}
      className={`flex items-center gap-1 text-sm
        ${hasVoted
          ? 'cursor-not-allowed opacity-60'
          : 'hover:text-palette-4'}`}
      title={hasVoted ? 'You already liked this' : 'Like'}
    >
      <ThumbsUp className="h-4 w-4" />
      {votes}
    </button>
  );
}
