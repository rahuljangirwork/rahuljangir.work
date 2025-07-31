import { useEffect, useCallback, useRef } from 'react';
import { useWakaTimeStore } from '../store/wakatime-store';
import { WakaTimeRPC } from '../api/rpc/wakatime-rpc';
import { useSupabaseRpc } from './use-supabase-rpc';

export function useWakaTime(autoFetch = true) {
    const {
        stats,
        historicalStats,
        isLoading,
        error,
        lastUpdated,
        setStats,
        setHistoricalStats,
        setLoading,
        setError,
        clearError,
    } = useWakaTimeStore();

    // Track if we've already fetched to prevent multiple calls
    const hasFetchedRef = useRef(false);
    const autoRefreshIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Latest stats RPC call
    const {
        execute: fetchLatestStats,
        isLoading: isFetchingLatest,
    } = useSupabaseRpc(
        () => WakaTimeRPC.getLatestStats(),
        {
            onSuccess: (data) => {
                setStats(data.data);
                setError(null);
                hasFetchedRef.current = true;
            },
            onError: (error) => {
                setError(error.message);
            }
        }
    );

    // Historical stats RPC call
    const {
        execute: fetchHistoricalStats,
        isLoading: isFetchingHistorical,
    } = useSupabaseRpc(
        () => WakaTimeRPC.getHistoricalStats(),
        {
            onSuccess: (data) => {
                setHistoricalStats(data);
                setError(null);
            },
            onError: (error) => {
                setError(error.message);
            }
        }
    );

    // Refresh function - just refetch the latest stats
    const refreshStats = useCallback(async () => {
        try {
            clearError();
            // Force a fresh fetch by resetting the flag
            hasFetchedRef.current = false;
            await fetchLatestStats();
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to refresh stats');
        }
    }, [fetchLatestStats, clearError, setError]);

    // Check if data needs auto-refresh (daily)
    const shouldAutoRefresh = useCallback(() => {
        if (!lastUpdated) return true;

        const lastUpdateTime = new Date(lastUpdated);
        const now = new Date();
        const hoursDiff = (now.getTime() - lastUpdateTime.getTime()) / (1000 * 60 * 60);

        // Auto-refresh if data is older than 24 hours
        return hoursDiff >= 24;
    }, [lastUpdated]);

    // Auto-refresh logic
    useEffect(() => {
        const setupAutoRefresh = () => {
            // Clear existing interval
            if (autoRefreshIntervalRef.current) {
                clearInterval(autoRefreshIntervalRef.current);
            }

            // Set up daily check (every hour)
            autoRefreshIntervalRef.current = setInterval(() => {
                if (shouldAutoRefresh()) {
                    console.log('Auto-refreshing WakaTime stats (24h+ old)');
                    refreshStats();
                }
            }, 60 * 60 * 1000); // Check every hour
        };

        // Initial check and setup
        if (autoFetch && stats && shouldAutoRefresh()) {
            console.log('Initial auto-refresh triggered');
            refreshStats();
        }

        setupAutoRefresh();

        // Cleanup interval on unmount
        return () => {
            if (autoRefreshIntervalRef.current) {
                clearInterval(autoRefreshIntervalRef.current);
            }
        };
    }, [autoFetch, stats, shouldAutoRefresh, refreshStats]);

    // Memoize the fetch function to prevent recreation
    const stableFetchLatestStats = useCallback(() => {
        if (!hasFetchedRef.current && !isFetchingLatest) {
            fetchLatestStats();
        }
    }, [fetchLatestStats, isFetchingLatest]);

    // Auto fetch on mount
    useEffect(() => {
        if (autoFetch && !stats) {
            stableFetchLatestStats();
        }
    }, [autoFetch, stats, stableFetchLatestStats]);

    // Update loading state
    useEffect(() => {
        setLoading(isFetchingLatest || isFetchingHistorical);
    }, [isFetchingLatest, isFetchingHistorical, setLoading]);

    return {
        // Data
        stats,
        historicalStats,
        lastUpdated,
        // States
        isLoading,
        error,
        // Actions
        fetchLatestStats: stableFetchLatestStats,
        fetchHistoricalStats,
        refreshStats, // This now refetches the latest stats
        clearError,
        // Helper to get stats for different ranges
        getStatsForRange: (range: 'last_7_days' | 'last_30_days' | 'last_6_months' | 'last_year') =>
            WakaTimeRPC.getStatsForRange(range),
    };
}
