// validations/user-profile.ts
import { z } from 'zod';

export const userProfileDataSchema = z.object({
    status: z.string(),
    message: z.string(),
    data: z.object({
        profile: z.object({
            id: z.string(),
            username: z.string(),
            display_name: z.string().nullable(),
            full_name: z.string().nullable(),
            email: z.string().nullable(),
            avatar_url: z.string().nullable(),
            bio: z.string().nullable(),
            // ... add other profile fields as needed
        }),
        current_status: z.object({
            status: z.string(),
            emoji: z.string(),
            message: z.string(),
            activity: z.string(),
            project: z.string(),
            // ... add other status fields
        }),
        tech_stack: z.object({
            primary_stack: z.array(z.string()),
            secondary_stack: z.array(z.string()),
            tools: z.array(z.string()),
            learning: z.array(z.string()),
        }),
        social_links: z.array(z.object({
            platform: z.string(),
            username: z.string().nullable(),
            url: z.string().nullable(),
            verified: z.boolean(),
        })),
        statistics: z.object({
            total_coding_hours: z.number(),
            active_days_count: z.number(),
            current_streak: z.number(),
            repositories: z.number(),
            // ... add other stats fields
        })
    }),
    timestamp: z.string(),
});

export type UserProfileData = z.infer<typeof userProfileDataSchema>;
