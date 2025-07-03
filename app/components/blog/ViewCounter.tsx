// ViewCounter.tsx
'use client';
import { usePostMetrics } from '@/app/lib/usePostMetrics';

export default function ViewCounter({ slug }: { slug: string }) {
  const { views } = usePostMetrics(slug);
  return <span>{views.toLocaleString()} views</span>;
}
