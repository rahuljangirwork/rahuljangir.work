import React from 'react';
import Image from 'next/image';

interface ProfileBasicCardProps {
    profileData?: {
        id?: string;
        username?: string;
        display_name?: string;
        full_name?: string;
        email?: string;
        avatar_url?: string;
        bio?: string;
        timezone?: string;
        country?: string;
        city?: string;
        title?: string;
        company?: string;
        location_description?: string;
        website_url?: string;
        github_username?: string;
        is_public?: boolean;
        last_seen_at?: string;
        skills?: string[];
        career_level?: string;
        years_experience?: number;
    } | null;
}

export function ProfileBasicCard({ profileData }: ProfileBasicCardProps) {
    if (!profileData) {
        return (
            <div className="text-sm text-muted-foreground">
                Loading profile...
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <div className="flex items-start gap-3">
                {profileData.avatar_url && (
                    <Image
                        src={profileData.avatar_url}
                        alt="Avatar"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                )}
                <div className="flex-1">
                    <h4 className="font-semibold text-lg">
                        {profileData.display_name || profileData.full_name || profileData.username}
                    </h4>
                    {profileData.title && (
                        <p className="text-sm text-muted-foreground">{profileData.title}</p>
                    )}
                    {(profileData.city || profileData.country) && (
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <span>📍</span>
                            {[profileData.city, profileData.country].filter(Boolean).join(', ')}
                        </p>
                    )}
                </div>
            </div>

            {profileData.bio && (
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {profileData.bio}
                </p>
            )}
        </div>
    );
}
