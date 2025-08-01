import { useEffect, useCallback, useRef } from 'react';
import { WakaTimeRPC } from '../api/rpc/wakatime-rpc';
import { useSupabaseRpc } from './use-supabase-rpc';

interface UserProfileData {
    profile: any;
    current_status: any;
    tech_stack: any;
    social_links: any[];
    statistics: any;
}

interface UseUserProfileReturn {
    profileData: UserProfileData | null;
    isLoading: boolean;
    error: string | null;
    fetchProfile: () => void;
    refreshProfile: () => Promise<void>;
    clearError: () => void;
}

export function useUserProfile(username?: string, autoFetch = true): UseUserProfileReturn {
    const hasFetchedRef = useRef(false);

    const {
        data: profileResponse,
        isLoading,
        error,
        execute: fetchProfileData,
        reset
    } = useSupabaseRpc(
        () => WakaTimeRPC.getUserProfileData(username),
        {
            onSuccess: (data) => {
                console.log('Profile data loaded:', data);
                hasFetchedRef.current = true;
            },
            onError: (error) => {
                console.error('Failed to load profile:', error);
            }
        }
    );

    const refreshProfile = useCallback(async () => {
        try {
            hasFetchedRef.current = false;
            await fetchProfileData();
        } catch (error) {
            console.error('Failed to refresh profile:', error);
            throw error;
        }
    }, [fetchProfileData]);

    const stableFetchProfile = useCallback(() => {
        if (!hasFetchedRef.current && !isLoading) {
            fetchProfileData();
        }
    }, [fetchProfileData, isLoading]);

    // Auto fetch on mount
    useEffect(() => {
        if (autoFetch && !profileResponse?.data) {
            stableFetchProfile();
        }
    }, [autoFetch, profileResponse?.data, stableFetchProfile]);

    const clearError = useCallback(() => {
        reset();
    }, [reset]);

    return {
        profileData: profileResponse?.data || null,
        isLoading,
        error: typeof error === 'string' ? error : error?.message || null,
        fetchProfile: stableFetchProfile,
        refreshProfile,
        clearError,
    };
}
