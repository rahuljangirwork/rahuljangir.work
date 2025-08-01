import { supabase } from "../supabase-client";
import type { WakaTimeRpcResponse } from '../../validations/wakatime';

// Add this interface for the profile data response
interface UserProfileResponse {
    status: string;
    message: string;
    data: {
        profile: any;
        current_status: any;
        tech_stack: any;
        social_links: any[];
        statistics: any;
    };
    timestamp: string;
}

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

    // Add this new method for user profile data
    static async getUserProfileData(username?: string): Promise<UserProfileResponse> {
        const { data, error } = await supabase.rpc('get_user_profile_data', {
            p_username: username || this.DEFAULT_USERNAME
        });

        if (error) {
            throw new Error(`Failed to fetch user profile data: ${error.message}`);
        }

        return data;
    }

    // ... rest of your existing methods
}
