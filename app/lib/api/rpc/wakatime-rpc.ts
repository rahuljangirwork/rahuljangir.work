import { supabase } from "../supabase-client";
import type { WakaTimeRpcResponse } from '../../validations/wakatime';

export class WakaTimeRPC {
    // Static configuration
    private static readonly DEFAULT_USERNAME = 'rahuljangirworks';
    private static readonly INCLUDE_RAW_DATA = true;

    static async getLatestStats(): Promise<WakaTimeRpcResponse> {
        const { data, error } = await supabase.rpc('get_latest_wakatime_stats', {
            p_username: this.DEFAULT_USERNAME,
            p_include_raw_data: this.INCLUDE_RAW_DATA
        });

        if (error) {
            throw new Error(`Failed to fetch latest stats: ${error.message}`);
        }

        return data;
    }

    static async getHistoricalStats(): Promise<WakaTimeRpcResponse[]> {
        const { data, error } = await supabase.rpc('get_historical_wakatime_stats', {
            p_username: this.DEFAULT_USERNAME
        });

        if (error) {
            throw new Error(`Failed to fetch historical stats: ${error.message}`);
        }

        return data || [];
    }

    static async getStatsForRange(range: string): Promise<WakaTimeRpcResponse> {
        const { data, error } = await supabase.rpc('get_wakatime_stats_for_range', {
            time_range: range,
            p_username: this.DEFAULT_USERNAME
        });

        if (error) {
            throw new Error(`Failed to fetch stats for range: ${error.message}`);
        }

        return data;
    }

    // Helper method to get stats with different parameters if needed
    static async getLatestStatsWithParams(
        username?: string,
        includeRawData: boolean = true
    ): Promise<WakaTimeRpcResponse> {
        const { data, error } = await supabase.rpc('get_latest_wakatime_stats', {
            p_username: username || this.DEFAULT_USERNAME,
            p_include_raw_data: includeRawData
        });

        if (error) {
            throw new Error(`Failed to fetch latest stats: ${error.message}`);
        }

        return data;
    }
}
