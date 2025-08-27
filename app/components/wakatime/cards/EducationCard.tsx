import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

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
            <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-1 sm:gap-0">
                    <h3 className="text-sm sm:text-md lg:text-lg font-semibold text-palette-2">
                        Master of Computer Applications
                    </h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-1 sm:gap-2">
                    <p className="text-palette-2">Savitribai Phule Pune University</p>
                    <p className="flex items-center gap-1 text-palette-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 inline-block" />
                        Pune, MH
                    </p>
                </div>
            </div>
        );
    }

    const education = profileData.education[0];

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-1 sm:gap-0">
                <h3 className="text-sm sm:text-md lg:text-lg font-semibold text-palette-2">
                    {education.degree || 'Degree'}
                </h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-1 sm:gap-2">
                <p className="text-palette-2">
                    {education.institution || 'Institution'}
                </p>
                {education.location && (
                    <p className="flex items-center gap-1 text-palette-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 inline-block" />
                        {education.location}
                    </p>
                )}
            </div>
            {(education.start_year || education.end_year) && (
                <p className="text-xs sm:text-sm text-palette-2 mt-1">
                    {education.start_year} - {education.end_year || 'Present'}
                </p>
            )}
            {education.field_of_study && (
                <p className="text-xs text-palette-2/70">
                    {education.field_of_study}
                </p>
            )}
        </div>
    );
}
