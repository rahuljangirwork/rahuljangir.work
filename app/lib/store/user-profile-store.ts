import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Define the structure of the profile data based on the API response
interface UserProfileData {
    profile: any;
    current_status: any;
    tech_stack: any;
    social_links: any[];
    statistics: any;
}

interface UserProfileState {
    // Data
    profileData: UserProfileData | null;
    lastUpdated: string | null;
    // UI State
    isLoading: boolean;
    error: string | null;
    // Actions
    setProfileData: (data: UserProfileData) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    clearError: () => void;
    reset: () => void;
}

export const useUserProfileStore = create<UserProfileState>()(
    devtools(
        persist(
            (set, get) => ({
                // Initial state
                profileData: null,
                lastUpdated: null,
                isLoading: false,
                error: null,
                // Actions
                setProfileData: (data) => {
                    const currentData = get().profileData;
                    if (JSON.stringify(currentData) !== JSON.stringify(data)) {
                        set({
                            profileData: data,
                            lastUpdated: new Date().toISOString(),
                        });
                    }
                },
                setLoading: (isLoading) => set({ isLoading }),
                setError: (error) => set({ error }),
                clearError: () => set({ error: null }),
                reset: () => set({
                    profileData: null,
                    lastUpdated: null,
                    isLoading: false,
                    error: null,
                }),
            }),
            {
                name: 'user-profile-storage',
                // Persist only the data and last updated time
                partialize: (state) => ({
                    profileData: state.profileData,
                    lastUpdated: state.lastUpdated,
                }),
            }
        ),
        { name: 'user-profile-store' }
    )
);
