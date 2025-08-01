import React from 'react';
import { Github, Linkedin, Twitter, Globe, ExternalLink } from 'lucide-react';

interface SocialLinksCardProps {
    socialLinks?: Array<{
        platform?: string;
        username?: string;
        url?: string;
        handle?: string;
        verified?: boolean;
        public?: boolean;
        follower_count?: number;
        repository_count?: number;
        connection_count?: number;
        post_count?: number;
        type?: string;
    }> | null;
}

export function SocialLinksCard({ socialLinks }: SocialLinksCardProps) {
    if (!socialLinks || socialLinks.length === 0) {
        return (
            <div className="text-sm text-muted-foreground">
                No social links available
            </div>
        );
    }

    const getIcon = (platform: string) => {
        switch (platform?.toLowerCase()) {
            case 'github': return <Github className="w-4 h-4" />;
            case 'linkedin': return <Linkedin className="w-4 h-4" />;
            case 'twitter': return <Twitter className="w-4 h-4" />;
            case 'portfolio': return <ExternalLink className="w-4 h-4" />;
            default: return <Globe className="w-4 h-4" />;
        }
    };

    const getDisplayCount = (link: any) => {
        return link.follower_count || link.connection_count || link.repository_count;
    };

    return (
        <div className="space-y-2">
            {socialLinks.slice(0, 4).map((link, index) => (
                <a
                    key={index}
                    href={link.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm hover:text-palette-4 transition-colors group"
                >
                    <div className="flex items-center gap-2">
                        {getIcon(link.platform || '')}
                        <span>{link.platform}</span>
                        {link.verified && (
                            <span className="text-xs text-blue-500">✓</span>
                        )}
                    </div>
                    {getDisplayCount(link) && (
                        <span className="text-xs text-muted-foreground group-hover:text-palette-4/80">
                            {getDisplayCount(link)}
                        </span>
                    )}
                </a>
            ))}
        </div>
    );
}
