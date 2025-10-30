// "use client";
// import { useEffect, useState } from "react";
// import { supabase } from "./supabase";

// export function usePostMetrics(slug: string) {
//     const [views, setViews] = useState<number>(0);
//     const [votes, setVotes] = useState<number>(0);

//     // fetch counts
//     useEffect(() => {
//         async function getCounts() {
//             // GET
//             const { data } = await supabase.rpc("sp_blog_post", {
//                 p_action: "GET",
//                 p_slug: slug,
//             });
//             if (data?.views !== undefined) setViews(data.views);
//             if (data?.votes !== undefined) setVotes(data.votes);
//         }
//         getCounts();
//     }, [slug]);

//     // up-vote helper
//     const upvote = async () => {
//         await supabase.rpc("sp_blog_post", { p_action: "UPVOTE", p_slug: slug });
//         setVotes((v) => v + 1);
//     };

//     return { views, votes, upvote };
// }






// app/lib/usePostMetrics.ts
// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import { supabase } from '@/app/lib/supabase';

// export function usePostMetrics(slug: string) {
//   const [views, setViews]       = useState<number>(0);
//   const [votes, setVotes]       = useState<number>(0);
//   const [hasVoted, setHasVoted] = useState<boolean>(false);

//   /* ---------- View counter (unchanged) ---------- */
// // inside usePostMetrics.ts  (already in the earlier snippet)
// useEffect(() => {
//     supabase.rpc('sp_blog_post', {
//       p_action: 'ADDVIEW',
//       p_slug:  slug,          // e.g. 'unix-story' or '/blog/unix-story'
//     });
//   }, [slug]);                 // ← runs once whenever slug changes
  

//   /* ---------- Load counts + local vote status ---------- */
//   useEffect(() => {
//     (async () => {
//       /* counts */
//       const { data } = await supabase
//         .rpc('sp_blog_post', { p_action: 'GET', p_slug: slug });
//       setViews(data?.views ?? 0);
//       setVotes(data?.votes ?? 0);

//       /* localStorage flag */
//       setHasVoted(localStorage.getItem(`voted-${slug}`) === 'true');
//     })();
//   }, [slug]);

//   /* ---------- Up-vote once per browser ---------- */
//   const upvote = useCallback(async () => {
//     if (hasVoted) return;                 // guard

//     const { error, data } = await supabase.rpc('sp_blog_post', {
//       p_action: 'UPVOTE',
//       p_slug: slug,
//     });

//     if (!error) {
//       setVotes(data.votes);               // updated total from RPC
//       setHasVoted(true);
//       localStorage.setItem(`voted-${slug}`, 'true');  // remember
//     }
//   }, [hasVoted, slug]);

//   return { views, votes, hasVoted, upvote };
// }



// app/lib/usePostMetrics.ts
// app/lib/usePostMetrics.ts
// app/lib/usePostMetrics.ts
// app/lib/usePostMetrics.ts
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/app/lib/supabase';
import type { RealtimeChannel } from '@supabase/supabase-js';

/**
 * View + Vote metrics (no‑auth version) with **Realtime sync**
 *
 * Views
 *  • Counted when 50 % of the article is in the viewport for ≥3 s.
 *  • Cool‑down: same browser can only register one view per post every 12 h.
 *
 * Votes
 *  • One like per browser (flag in localStorage).
 *
 * Realtime
 *  • Subscribes to UPDATE events on the specific `blog_posts` row so
 *    every open tab updates instantly when someone views or likes.
 */
const VIEW_MIN_VISIBLE_MS = 3_000;   // ms the post must stay visible
const VIEW_COOLDOWN_H     = 12;      // hours between repeat views

export function usePostMetrics(slug: string) {
  /* ---------------- state ----------------- */
  const [views,    setViews]    = useState<number>(0);
  const [votes,    setVotes]    = useState<number>(0);
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  /* ---------------- keys ------------------ */
  const viewKey = `viewed-${slug}`;
  const voteKey = `voted-${slug}`;

  /* ---------------- realtime -------------- */
  const channelRef = useRef<RealtimeChannel | null>(null);

  /* ---------- 1. fetch current counts ---------- */
  useEffect(() => {
    (async () => {
      const { data } = await supabase.rpc('sp_blog_post', {
        p_action: 'GET',
        p_slug:   slug,
      });
      if (data?.views !== undefined) setViews(data.views);
      if (data?.votes !== undefined) setVotes(data.votes);
      setHasVoted(localStorage.getItem(voteKey) === 'true');
    })();
  }, [slug, voteKey]);

  /* ---------- 1b. subscribe to live updates ---------- */
  useEffect(() => {
    // clean up any previous channel when slug changes
    if (channelRef.current) {
      channelRef.current.unsubscribe();
      channelRef.current = null;
    }

    const channel = supabase
      .channel(`post-${slug}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'blog_posts',
          filter: `slug=eq.${slug}`,
        },
        payload => {
          const { views: newViews, votes: newVotes } = payload.new as {
            views: number;
            votes: number;
          };
          setViews(newViews);
          setVotes(newVotes);
        }
      )
      .subscribe();

    channelRef.current = channel;

    return () => {
      channel.unsubscribe();
    };
  }, [slug]);

  /* ---------- 2. reliable view count ---------- */
  useEffect(() => {
    const cooldownMs = VIEW_COOLDOWN_H * 60 * 60 * 1000;
    const last = Number(localStorage.getItem(viewKey) ?? 0);
    if (Date.now() - last < cooldownMs) return; // recently counted

    const target = document.querySelector('[data-post-body]');
    if (!target) return;

    let seen = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (!timer) {
            timer = setTimeout(async () => {
              if (seen) return;
              seen = true;
              const { data } = await supabase.rpc('sp_blog_post', {
                p_action: 'ADDVIEW',
                p_slug:   slug,
              });
              if (data?.views !== undefined) setViews(data.views);
              localStorage.setItem(viewKey, String(Date.now()));
            }, VIEW_MIN_VISIBLE_MS);
          }
        } else if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      },
      { threshold: 0.5 }
    );

    io.observe(target);

    return () => {
      if (timer) clearTimeout(timer);
      io.disconnect();
    };
  }, [slug, viewKey]);

  /* ---------- 3. up‑vote once per browser ---------- */
  const upvote = useCallback(async () => {
    if (hasVoted) return;

    const { data } = await supabase.rpc('sp_blog_post', {
      p_action: 'UPVOTE',
      p_slug:   slug,
    });
    if (data?.votes !== undefined) setVotes(data.votes);

    localStorage.setItem(voteKey, 'true');
    setHasVoted(true);
  }, [hasVoted, slug, voteKey]);

  /* ---------- hook result ---------- */
  return { views, votes, upvote, hasVoted };
}
