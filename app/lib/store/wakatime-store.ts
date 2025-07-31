import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { WakaTimeStats } from '../validations/wakatime';

interface WakaTimeState {
    // Data
    stats: WakaTimeStats | null;
    historicalStats: any[];
    lastUpdated: string | null;
    // UI State
    isLoading: boolean;
    error: string | null;
    // Actions
    setStats: (stats: WakaTimeStats) => void;
    setHistoricalStats: (stats: any[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    clearError: () => void;
    reset: () => void;
}

export const useWakaTimeStore = create<WakaTimeState>()(
    devtools(
        persist(
            (set, get) => ({
                // Initial state
                stats: null,
                historicalStats: [],
                lastUpdated: null,
                isLoading: false,
                error: null,
                // Actions
                setStats: (stats) => {
                    // Only update if stats actually changed
                    const currentStats = get().stats;
                    if (JSON.stringify(currentStats) !== JSON.stringify(stats)) {
                        set({
                            stats,
                            lastUpdated: new Date().toISOString()
                        });
                    }
                },
                setHistoricalStats: (historicalStats) => set({ historicalStats }),
                setLoading: (isLoading) => set({ isLoading }),
                setError: (error) => set({ error }),
                clearError: () => set({ error: null }),
                reset: () => set({
                    stats: null,
                    historicalStats: [],
                    lastUpdated: null,
                    isLoading: false,
                    error: null,
                }),
            }),
            {
                name: 'wakatime-storage',
                partialize: (state) => ({
                    stats: state.stats,
                    lastUpdated: state.lastUpdated,
                }),
            }
        ),
        { name: 'wakatime-store' }
    )
);
