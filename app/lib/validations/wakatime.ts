import { z } from 'zod';

// Base schemas for WakaTime data structures
export const wakaTimeLanguageSchema = z.object({
    name: z.string(),
    text: z.string(),
    hours: z.number(),
    decimal: z.string(),
    digital: z.string(),
    minutes: z.number(),
    percent: z.number(),
    total_seconds: z.number(),
});

export const wakaTimeProjectSchema = z.object({
    name: z.string(),
    text: z.string(),
    hours: z.number(),
    decimal: z.string(),
    digital: z.string(),
    minutes: z.number(),
    percent: z.number(),
    total_seconds: z.number(),
});

export const wakaTimeEditorSchema = z.object({
    name: z.string(),
    text: z.string(),
    hours: z.number(),
    decimal: z.string(),
    digital: z.string(),
    minutes: z.number(),
    percent: z.number(),
    total_seconds: z.number(),
});

export const wakaTimeMachineSchema = z.object({
    name: z.string(),
    text: z.string(),
    hours: z.number(),
    decimal: z.string(),
    digital: z.string(),
    minutes: z.number(),
    percent: z.number(),
    total_seconds: z.number(),
    machine_name_id: z.string(),
});

export const wakaTimeStatsSchema = z.object({
    user_id: z.string(),
    period_start: z.string(),
    period_end: z.string(),
    total_seconds: z.number(),
    human_readable_daily_average: z.string().optional(), 
    human_readable_total: z.string(),
    daily_average: z.number(),
    best_day: z.object({
        date: z.string(),
        text: z.string(),
        total_seconds: z.number(),
    }).optional(),
    languages: z.array(wakaTimeLanguageSchema),
    projects: z.array(wakaTimeProjectSchema),
    editors: z.array(wakaTimeEditorSchema),
    operating_systems: z.array(z.object({
        name: z.string(),
        text: z.string(),
        percent: z.number(),
        total_seconds: z.number(),
    })),
    machines: z.array(wakaTimeMachineSchema),
    categories: z.array(z.object({
        name: z.string(),
        text: z.string(),
        hours: z.number(),
        percent: z.number(),
        total_seconds: z.number(),
    })),
    productivity_score: z.number().optional(),
    status: z.string(),
});

export const wakaTimeRpcResponseSchema = z.object({
    status: z.string(),
    message: z.string(),
    data: wakaTimeStatsSchema,
    timestamp: z.string(),
});

export type WakaTimeStats = z.infer<typeof wakaTimeStatsSchema>;
export type WakaTimeLanguage = z.infer<typeof wakaTimeLanguageSchema>;
export type WakaTimeProject = z.infer<typeof wakaTimeProjectSchema>;
export type WakaTimeRpcResponse = z.infer<typeof wakaTimeRpcResponseSchema>;
