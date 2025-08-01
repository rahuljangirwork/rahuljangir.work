import React from 'react';

interface CertificationsCardProps {
    profileData?: {
        certifications?: Array<{
            name?: string;
            issuer?: string;
            date?: string;
            url?: string;
            description?: string;
        }>;
    } | null;
}

export function CertificationsCard({ profileData }: CertificationsCardProps) {
    // Since certifications array is empty in your data, show a placeholder
    if (!profileData?.certifications || profileData.certifications.length === 0) {
        return (
            <div className="text-sm text-muted-foreground">
                No certifications listed
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {profileData.certifications.slice(0, 2).map((cert, index) => (
                <div key={index} className="border-b last:border-b-0 pb-2 last:pb-0">
                    <h5 className="font-medium text-sm">{cert.name}</h5>
                    {cert.issuer && (
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    )}
                    {cert.date && (
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
