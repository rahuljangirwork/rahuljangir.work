import React from 'react';

interface TechStackCardProps {
    techStack?: {
        primary_stack?: string[];
        secondary_stack?: string[];
        tools?: string[];
        learning?: string[];
        expertise_level?: Record<string, string>;
        recent_activity?: {
            last_used_language?: string;
            last_framework?: string;
            current_learning_focus?: string;
        };
    } | null;
}

export function TechStackCard({ techStack }: TechStackCardProps) {
    if (!techStack) {
        return (
            <div className="text-sm text-muted-foreground">
                Loading tech stack...
            </div>
        );
    }

    // Get the technologies to display (primary_stack if available, otherwise secondary_stack)
    const primaryTech = techStack.primary_stack && techStack.primary_stack.length > 0
        ? techStack.primary_stack
        : techStack.secondary_stack || [];

    return (
        <div className="space-y-3">
            {primaryTech.length > 0 && (
                <div>
                    <h5 className="text-xs font-semibold mb-2 text-muted-foreground">
                        {techStack.primary_stack && techStack.primary_stack.length > 0 ? 'Primary Stack' : 'Tech Stack'}
                    </h5>
                    <div className="flex flex-wrap gap-1">
                        {primaryTech.slice(0, 4).map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs bg-palette-4/20 text-palette-4 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {techStack.learning && techStack.learning.length > 0 && (
                <div>
                    <h5 className="text-xs font-semibold mb-2 text-muted-foreground">Currently Learning</h5>
                    <div className="flex flex-wrap gap-1">
                        {techStack.learning.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs bg-palette-2/20 text-palette-2 rounded border border-palette-2/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {techStack.recent_activity?.last_used_language && (
                <div className="text-xs text-muted-foreground">
                    Last used: <span className="font-medium text-palette-4">
                        {techStack.recent_activity.last_used_language}
                    </span>
                </div>
            )}
        </div>
    );
}
