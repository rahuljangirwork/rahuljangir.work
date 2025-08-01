"use client";

import React from "react";
import {
    MapPin,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    Code2,
    Calendar,
    Coffee,
    Star,
    Download,
    Zap,
    Clock,
    Globe,
    Twitter,
    Briefcase,
    GraduationCap,
    Award,
    Activity,
    Focus,
    Battery,
    Smile
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

interface ProfileCardProps {
    className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
    // Dummy data based on user_profiles table
    const userProfile = {
        id: "550e8400-e29b-41d4-a716-446655440000",
        username: "rahuljangir",
        display_name: "Rahul Jangir",
        full_name: "Rahul Kumar Jangir",
        email: "rahuljangir.works@gmail.com",
        avatar_url: null, // Will use initials
        bio: "Full Stack Developer passionate about building clean, efficient software. Love working with modern tech stack and contributing to open source.",

        // Location & timezone
        timezone: "Asia/Kolkata",
        country: "India",
        city: "Jaipur",

        // Job info
        title: "Full Stack Developer",
        company: "Tech Innovations Pvt Ltd",
        current_company: "Tech Innovations Pvt Ltd",
        location_description: "Rajasthan, India",

        // Social links
        website_url: "https://rahuljangir.dev",
        portfolio_url: "https://portfolio.rahuljangir.dev",
        github_username: "rahuljangir",
        linkedin_url: "https://linkedin.com/in/rahuljangir",
        twitter_url: "https://twitter.com/rahuljangir",

        // Developer info
        skills: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "Git"],
        career_level: "mid",
        years_experience: 3,
        open_to_job_offers: true,

        // Education & certifications
        education: [
            {
                degree: "Master of Computer Applications",
                institution: "Savitribai Phule Pune University",
                year: "2023",
                location: "Pune, MH"
            }
        ],
        certifications: [
            {
                name: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                year: "2024"
            }
        ],

        // Privacy settings
        is_public: true,
        show_location: true,
        show_detailed_stats: true,
        is_active: true,
        last_seen_at: "2025-08-01T14:30:00Z"
    };

    // Dummy data based on status_updates table
    const currentStatus = {
        id: "660f8400-e29b-41d4-a716-446655440001",
        status: "focusing",
        emoji: "💻",
        message: "Deep work session - building React components",

        // Activity context
        activity: "Coding",
        project: "WakaTime Dashboard",
        workspace: "Home Office",

        // Life metrics
        focus_level: 4,
        mood_level: 4,
        energy_level: 3,
        tags: ["deep-work", "frontend", "react"],

        // Timing
        started_at: "2025-08-01T13:00:00Z",
        estimated_duration_minutes: 120,
        expires_at: "2025-08-01T15:00:00Z",

        // Visibility
        is_active: true,
        visibility: "public",
        show_activity: true,
        show_location: false,

        // Location (if shown)
        city: "Jaipur",
        country: "India"
    };

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'focusing': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'online': return 'bg-green-100 text-green-700 border-green-200';
            case 'in a meeting': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const getCareerLevelDisplay = (level: string) => {
        switch (level) {
            case 'junior': return 'Junior Developer';
            case 'mid': return 'Mid-Level Developer';
            case 'senior': return 'Senior Developer';
            case 'lead': return 'Lead Developer';
            default: return 'Developer';
        }
    };

    const formatTimeAgo = (timestamp: string) => {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / (1000 * 60));

        if (diffInMinutes < 1) return "Active now";
        if (diffInMinutes < 60) return `Active ${diffInMinutes}m ago`;
        const hours = Math.floor(diffInMinutes / 60);
        return `Active ${hours}h ago`;
    };

    return (
        <div className={`rounded-lg p-6 bg-primary border border-palette-1 shadow-xl flex flex-col space-y-6 ${className}`}>
            {/* Header Section */}
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-palette-4 to-palette-4/80 flex items-center justify-center text-white font-bold text-xl shrink-0 relative">
                    {getInitials(userProfile.display_name)}
                    {/* Online status indicator */}
                    {userProfile.is_active && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs">✓</span>
                        </div>
                    )}
                </div>

                {/* Basic Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl font-bold text-palette-2">{userProfile.display_name}</h2>
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(currentStatus.status)}`}>
                            {currentStatus.emoji} {currentStatus.status}
                        </Badge>
                        {userProfile.open_to_job_offers && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                                Open to work
                            </Badge>
                        )}
                    </div>
                    <p className="text-sm font-medium text-palette-2/80 mb-1">{userProfile.title}</p>
                    <div className="flex items-center gap-4 text-xs text-palette-2/60 mb-2">
                        <div className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            <span>{userProfile.current_company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{userProfile.years_experience}+ years</span>
                        </div>
                    </div>
                    {userProfile.show_location && (
                        <div className="flex items-center gap-1 text-xs text-palette-2/60 mb-2">
                            <MapPin className="w-3 h-3" />
                            <span>{userProfile.city}, {userProfile.country}</span>
                            <span className="ml-2">({userProfile.timezone})</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Current Status */}
            {currentStatus.is_active && currentStatus.visibility === 'public' && (
                <div className="p-4 rounded-lg bg-palette-3/10 border border-palette-3/20">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-palette-4" />
                        <span className="text-sm font-medium text-palette-2">Current Activity</span>
                    </div>
                    <p className="text-sm text-palette-2/80 mb-2">{currentStatus.message}</p>

                    {currentStatus.show_activity && (
                        <div className="flex items-center gap-4 text-xs text-palette-2/60">
                            <span>📋 {currentStatus.activity}</span>
                            <span>🚀 {currentStatus.project}</span>
                            <span>🏠 {currentStatus.workspace}</span>
                        </div>
                    )}

                    {/* Life metrics */}
                    <div className="grid grid-cols-3 gap-2 mt-3">
                        <div className="flex items-center gap-1 text-xs">
                            <Focus className="w-3 h-3 text-palette-4" />
                            <span>Focus: {currentStatus.focus_level}/5</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                            <Battery className="w-3 h-3 text-palette-4" />
                            <span>Energy: {currentStatus.energy_level}/5</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                            <Smile className="w-3 h-3 text-palette-4" />
                            <span>Mood: {currentStatus.mood_level}/5</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Bio */}
            <div>
                <p className="text-sm text-palette-2/70 leading-relaxed">{userProfile.bio}</p>
            </div>

            {/* Tech Stack */}
            <div>
                <h3 className="text-sm font-semibold text-palette-2 mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-palette-4" />
                    Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                    {userProfile.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs bg-palette-4/10 text-palette-4 rounded-md border border-palette-4/20"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-sm font-semibold text-palette-2 mb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-palette-4" />
                        Education
                    </h3>
                    {userProfile.education.map((edu, index) => (
                        <div key={index} className="text-xs text-palette-2/70">
                            <p className="font-medium">{edu.degree}</p>
                            <p>{edu.institution}</p>
                            <p>{edu.year} • {edu.location}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-palette-2 mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-palette-4" />
                        Certifications
                    </h3>
                    {userProfile.certifications.map((cert, index) => (
                        <div key={index} className="text-xs text-palette-2/70">
                            <p className="font-medium">{cert.name}</p>
                            <p>{cert.issuer}</p>
                            <p>{cert.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-palette-3/20">
                <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-palette-4/10 text-palette-4 hover:bg-palette-4/20 transition-colors text-sm">
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-palette-4/10 text-palette-4 hover:bg-palette-4/20 transition-colors text-sm">
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-palette-4/10 text-palette-4 hover:bg-palette-4/20 transition-colors text-sm">
                        <Globe className="w-4 h-4" />
                        <span>Portfolio</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-palette-4/10 text-palette-4 hover:bg-palette-4/20 transition-colors text-sm">
                        <Twitter className="w-4 h-4" />
                        <span>Twitter</span>
                    </button>
                </div>
            </div>

            {/* Contact & Availability */}
            <div className="pt-2 space-y-2">
                <div className="text-center text-xs text-palette-2/60">
                    {formatTimeAgo(userProfile.last_seen_at)}
                </div>
                <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-palette-4 text-white hover:bg-palette-4/90 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Get In Touch</span>
                </button>
            </div>
        </div>
    );
}
