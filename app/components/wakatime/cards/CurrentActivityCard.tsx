import React from 'react';

interface CurrentActivityCardProps {
    currentStatus?: {
        id?: string;
        status?: string;
        emoji?: string;
        message?: string;
        activity?: string;
        project?: string;
        workspace?: string;
        focus_level?: number;
        mood_level?: number;
        energy_level?: number;
        tags?: string[];
        started_at?: string;
        expires_at?: string;
        is_active?: boolean;
        visibility?: string;
        city?: string;
        country?: string;
        metadata?: {
            last_activity?: string;
            current_project?: string;
            hours_coded_today?: number;
            primary_language_today?: string;
            activity_intensity?: string;
            heartbeats_today?: number;
            break_count_today?: number;
            lines_of_code_today?: number;
            commits_today?: number;
            files_modified_today?: number;
        };
    } | null;
}

export function CurrentActivityCard({ currentStatus }: CurrentActivityCardProps) {
    if (!currentStatus || !currentStatus.is_active) {
        return (
            <div className="text-sm text-muted-foreground">
                No current activity
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {/* <div className="flex items-center gap-2">
                <span className="text-xl">{currentStatus.emoji || '💻'}</span>
                <div className="flex-1">
                    <div className="font-medium capitalize">{currentStatus.status || 'Working'}</div>
                    <div className="text-sm text-muted-foreground">
                        {currentStatus.activity || 'Coding'}
                    </div>
                </div>
            </div> */}

            {currentStatus.message && (
                <p className="text-sm line-clamp-2">{currentStatus.message}</p>
            )}

            <div className="grid grid-cols-2 gap-2 text-xs">
                {currentStatus.project && (
                    <div>
                        <span className="text-muted-foreground">Project:</span>
                        <div className="font-medium text-palette-4">{currentStatus.project}</div>
                    </div>
                )}

                {currentStatus.metadata?.hours_coded_today && (
                    <div>
                        <span className="text-muted-foreground">Today:</span>
                        <div className="font-medium text-palette-4">
                            {currentStatus.metadata.hours_coded_today}h coded
                        </div>
                    </div>
                )}

                {currentStatus.metadata?.primary_language_today && (
                    <div>
                        <span className="text-muted-foreground">Language:</span>
                        <div className="font-medium">{currentStatus.metadata.primary_language_today}</div>
                    </div>
                )}

                {currentStatus.workspace && (
                    <div>
                        <span className="text-muted-foreground">Location:</span>
                        <div className="font-medium">{currentStatus.workspace}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
