import React from 'react';

interface EducationCardProps {
    profileData?: {
        education?: Array<{
            degree?: string;
            institution?: string;
            location?: string;
            start_year?: number;
            end_year?: number;
            field_of_study?: string;
            description?: string;
        }>;
    } | null;
}

export function EducationCard({ profileData }: EducationCardProps) {
    // Since education array is empty in your data, show a default message
    if (!profileData?.education || profileData.education.length === 0) {
        return (
            <div className="space-y-2">
                <h4 className="font-semibold text-sm">Master of Computer Applications</h4>
                <p className="text-xs text-muted-foreground">Savitribai Phule Pune University</p>
                <p className="text-xs text-muted-foreground">📍 Pune, MH</p>
            </div>
        );
    }

    const education = profileData.education[0];

    return (
        <div className="space-y-2">
            <h4 className="font-semibold text-sm">{education.degree || 'Degree'}</h4>
            <p className="text-xs text-muted-foreground">
                {education.institution || 'Institution'}
            </p>
            {education.location && (
                <p className="text-xs text-muted-foreground">
                    📍 {education.location}
                </p>
            )}
            {(education.start_year || education.end_year) && (
                <p className="text-xs text-muted-foreground">
                    {education.start_year} - {education.end_year || 'Present'}
                </p>
            )}
        </div>
    );
}
