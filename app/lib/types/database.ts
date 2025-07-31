export interface Database {
    public: {
        Tables: {
            wakatime_stats: {
                Row: {
                    id: string;
                    user_id: string;
                    stats_data: any; // JSON field
                    period_start: string;
                    period_end: string;
                    total_seconds: number;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    stats_data: any;
                    period_start: string;
                    period_end: string;
                    total_seconds: number;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    stats_data?: any;
                    period_start?: string;
                    period_end?: string;
                    total_seconds?: number;
                    updated_at?: string;
                };
            };
        };
    };
}
