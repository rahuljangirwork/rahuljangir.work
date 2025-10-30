import { useEffect, useCallback } from 'react';
import { useUserProfileStore } from '../store/user-profile-store';
import { WakaTimeRPC } from '../api/rpc/wakatime-rpc';
import { useSupabaseRpc } from './use-supabase-rpc';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export function useUserProfile(username?: string, autoFetch = true) {
    const {
        profileData,
        lastUpdated,
        isLoading,
        error,
        setProfileData,
        setLoading,
        setError,
        clearError,
    } = useUserProfileStore();

    const {
        execute: fetchProfileData,
        isLoading: isFetching,
    } = useSupabaseRpc(
        () => WakaTimeRPC.getUserProfileData(username),
        {
            onSuccess: (response) => {
                setProfileData(response.data);
                setError(null);
            },
            onError: (error) => {
                setError(error.message);
            }
        }
    );

    const isDataStale = useCallback(() => {
        if (!lastUpdated) return true;
        const now = new Date().getTime();
        const lastUpdatedTime = new Date(lastUpdated).getTime();
        return (now - lastUpdatedTime) > FIVE_MINUTES_IN_MS;
    }, [lastUpdated]);

    const stableFetchProfile = useCallback(async () => {
        if (isDataStale() && !isLoading) {
            await fetchProfileData();
        }
    }, [fetchProfileData, isDataStale, isLoading]);

    const refreshProfile = useCallback(async () => {
        await fetchProfileData();
    }, [fetchProfileData]);

    useEffect(() => {
        if (autoFetch && (!profileData || isDataStale()) && !isLoading) {
            stableFetchProfile();
        }
    }, [autoFetch, profileData, isDataStale, stableFetchProfile, isLoading]);

    useEffect(() => {
        setLoading(isFetching);
    }, [isFetching, setLoading]);

    return {
        profileData,
        isLoading,
        error,
        fetchProfile: stableFetchProfile,
        refreshProfile,
        clearError,
    };
}
