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

export const wakaTimeOperatingSystemSchema = z.object({
    name: z.string(),
    text: z.string(),
    hours: z.number(),
    decimal: z.string(),
    digital: z.string(),
    minutes: z.number(),
    percent: z.number(),
    total_seconds: z.number(),
});

export const wakaTimeCategorySchema = z.object({
    name: z.string(),
    text: z.string(),
    hours: z.number(),
    decimal: z.string(),
    digital: z.string(),
    minutes: z.number(),
    percent: z.number(),
    total_seconds: z.number(),
});

export const wakaTimeDependencySchema = z.object({
    name: z.string(),
    text: z.string(),
    hours: z.number(),
    decimal: z.string(),
    digital: z.string(),
    minutes: z.number(),
    percent: z.number(),
    total_seconds: z.number(),
});

export const wakaTimeBestDaySchema = z.object({
    date: z.string(),
    text: z.string(),
    total_seconds: z.number(),
});

export const wakaTimeRangeSchema = z.object({
    end: z.string(),
    date: z.string(),
    text: z.string(),
    start: z.string(),
    timezone: z.string(),
});

export const wakaTimeGoalChartDataSchema = z.object({
    range: wakaTimeRangeSchema,
    goal_seconds: z.number(),
    range_status: z.string(),
    actual_seconds: z.number(),
    goal_seconds_text: z.string(),
    actual_seconds_text: z.string(),
    range_status_reason: z.string(),
    range_status_reason_short: z.string(),
});

export const wakaTimeOwnerSchema = z.object({
    id: z.string(),
    email: z.string().nullable(),
    photo: z.string(),
    username: z.string(),
    full_name: z.string(),
    display_name: z.string(),
});

export const wakaTimeSubscriberSchema = z.object({
    email: z.string().nullable(),
    user_id: z.string(),
    username: z.string(),
    full_name: z.string(),
    display_name: z.string(),
    email_frequency: z.string(),
});

export const wakaTimeGoalSchema = z.object({
    id: z.string(),
    type: z.string(),
    delta: z.string(),
    owner: wakaTimeOwnerSchema,
    title: z.string(),
    status: z.string(),
    editors: z.array(z.string()),
    seconds: z.number(),
    projects: z.array(z.string()),
    languages: z.array(z.string()),
    chart_data: z.array(wakaTimeGoalChartDataSchema),
    created_at: z.string(),
    is_enabled: z.boolean(),
    is_inverse: z.boolean(),
    is_snoozed: z.boolean(),
    range_text: z.string(),
    ignore_days: z.array(z.string()),
    is_tweeting: z.boolean(),
    modified_at: z.string(),
    shared_with: z.array(z.unknown()),
    subscribers: z.array(wakaTimeSubscriberSchema),
    custom_title: z.string().nullable(),
    snooze_until: z.string().nullable(),
    average_status: z.string(),
    ignore_zero_days: z.boolean(),
    cumulative_status: z.string(),
    improve_by_percent: z.number().nullable(),
    is_current_user_owner: z.boolean(),
    status_percent_calculated: z.number(),
});

export const wakaTimeDetailedStatsSchema = z.object({
    id: z.string(),
    end: z.string(),
    range: z.string(),
    start: z.string(),
    status: z.string(),
    editors: z.array(wakaTimeEditorSchema),
    timeout: z.number(),
    user_id: z.string(),
    best_day: wakaTimeBestDaySchema,
    holidays: z.number(),
    is_stuck: z.boolean(),
    machines: z.array(wakaTimeMachineSchema),
    projects: z.array(wakaTimeProjectSchema),
    timezone: z.string(),
    username: z.string(),
    is_cached: z.boolean(),
    languages: z.array(wakaTimeLanguageSchema),
    categories: z.array(wakaTimeCategorySchema),
    created_at: z.string(),
    modified_at: z.string(),
    writes_only: z.boolean(),
    dependencies: z.array(wakaTimeDependencySchema),
    daily_average: z.number(),
    is_up_to_date: z.boolean(),
    total_seconds: z.number(),
    operating_systems: z.array(wakaTimeOperatingSystemSchema),
    is_including_today: z.boolean(),
    percent_calculated: z.number(),
    days_minus_holidays: z.number(),
    is_already_updating: z.boolean(),
    is_os_usage_visible: z.boolean(),
    human_readable_range: z.string(),
    human_readable_total: z.string(),
    days_including_holidays: z.number(),
    is_editor_usage_visible: z.boolean(),
    is_category_usage_visible: z.boolean(),
    is_language_usage_visible: z.boolean(),
    is_coding_activity_visible: z.boolean(),
    human_readable_daily_average: z.string(),
    is_up_to_date_pending_future: z.boolean(),
    daily_average_including_other_language: z.number(),
    total_seconds_including_other_language: z.number(),
    human_readable_total_including_other_language: z.string(),
    human_readable_daily_average_including_other_language: z.string(),
});

export const wakaTimeAllTimeSchema = z.object({
    text: z.string(),
    range: z.object({
        end: z.string(),
        start: z.string(),
        end_date: z.string(),
        end_text: z.string(),
        timezone: z.string(),
        start_date: z.string(),
        start_text: z.string(),
    }),
    decimal: z.string(),
    digital: z.string(),
    timeout: z.number(),
    daily_average: z.number(),
    is_up_to_date: z.boolean(),
    total_seconds: z.number(),
    percent_calculated: z.number(),
});

export const wakaTimeRawDataSchema = z.object({
    goals: z.array(wakaTimeGoalSchema),
    stats: wakaTimeDetailedStatsSchema,
    all_time: wakaTimeAllTimeSchema,
    summaries_count: z.number(),
});

export const wakaTimeGoalsSummarySchema = z.object({
    goals: z.array(z.object({
        id: z.string(),
        type: z.string(),
        range: z.string(),
        title: z.string(),
        status: z.string(),
        created_at: z.string(),
        updated_at: z.string(),
        is_achieved: z.boolean(),
        target_seconds: z.number(),
        progress_percent: z.number(),
        progress_seconds: z.number(),
    })),
    total: z.number(),
    active: z.number(),
    paused: z.number(),
    completed: z.number(),
});

export const wakaTimeStatsSchema = z.object({
    user_id: z.string(),
    period_start: z.string(),
    period_end: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    total_seconds: z.number(),
    daily_average: z.number(),
    digital: z.string().nullable(),
    decimal: z.string().nullable(),
    is_up_to_date: z.boolean(),
    percent_calculated: z.number(),
    human_readable_total: z.string(),
    range_timezone: z.string(),
    range_start_iso: z.string().nullable(),
    range_end_iso: z.string().nullable(),
    range_start_date: z.string(),
    range_end_date: z.string(),
    range_text: z.string(),
    best_day: wakaTimeBestDaySchema.optional(),
    current_streak: z.unknown().nullable(),
    longest_streak: z.unknown().nullable(),
    categories: z.array(wakaTimeCategorySchema),
    languages: z.array(wakaTimeLanguageSchema),
    editors: z.array(wakaTimeEditorSchema),
    operating_systems: z.array(wakaTimeOperatingSystemSchema),
    projects: z.array(wakaTimeProjectSchema),
    machines: z.array(wakaTimeMachineSchema),
    productivity_score: z.number().optional(),
    focus_time_percentage: z.number().optional(),
    status: z.string(),
    interruption_count: z.number().optional(),
    cached_at: z.string().optional(),
    raw_data: wakaTimeRawDataSchema.optional(),
    current_status: z.string().optional(),
    status_message: z.string().optional(),
    human_readable_daily_average: z.string().optional(),
    goals: wakaTimeGoalsSummarySchema.optional(),
    tags: z.array(z.string()).optional(),
    data_source: z.string().optional(),
    sync_status: z.string().optional(),
    weekly_human_readable_total: z.string().optional(),
    weekly_human_readable_daily_average: z.string().optional(),
});

export const wakaTimeRpcResponseSchema = z.object({
    status: z.string(),
    message: z.string(),
    data: wakaTimeStatsSchema,
    timestamp: z.string(),
});

// Export all types
export type WakaTimeStats = z.infer<typeof wakaTimeStatsSchema>;
export type WakaTimeLanguage = z.infer<typeof wakaTimeLanguageSchema>;
export type WakaTimeProject = z.infer<typeof wakaTimeProjectSchema>;
export type WakaTimeEditor = z.infer<typeof wakaTimeEditorSchema>;
export type WakaTimeMachine = z.infer<typeof wakaTimeMachineSchema>;
export type WakaTimeOperatingSystem = z.infer<typeof wakaTimeOperatingSystemSchema>;
export type WakaTimeCategory = z.infer<typeof wakaTimeCategorySchema>;
export type WakaTimeDependency = z.infer<typeof wakaTimeDependencySchema>;
export type WakaTimeBestDay = z.infer<typeof wakaTimeBestDaySchema>;
export type WakaTimeGoal = z.infer<typeof wakaTimeGoalSchema>;
export type WakaTimeDetailedStats = z.infer<typeof wakaTimeDetailedStatsSchema>;
export type WakaTimeAllTime = z.infer<typeof wakaTimeAllTimeSchema>;
export type WakaTimeRawData = z.infer<typeof wakaTimeRawDataSchema>;
export type WakaTimeGoalsSummary = z.infer<typeof wakaTimeGoalsSummarySchema>;
export type WakaTimeRpcResponse = z.infer<typeof wakaTimeRpcResponseSchema>;
