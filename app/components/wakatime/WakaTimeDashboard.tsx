"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Calendar,
  TrendingUp,
  Clock,
  Star,
  Palette,
  Monitor,
  Merge,
  FolderKanban,
  Braces,
  BarChart3,
  Atom,
  GraduationCap,
  MapPin,
  Mail,
  User,
  Activity,
  Code2,
  Award,
  Share2,
} from "lucide-react";
import { useWakaTime } from "@/app/lib/hooks/use-wakatime";
import { useUserProfile } from "@/app/lib/hooks/use-user-profile";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Skeleton } from "@/app/components/ui/skeleton";

// Import your WakaTime components
import { WakaTimeTotalTimeCard } from "./cards/WakaTimeTotalTimeCard";
import { WakaTimeDailyAverageCard } from "./cards/WakaTimeDailyAverageCard";
import { WakaTimeBestDayCard } from "./cards/WakaTimeBestDayCard";
import { WakaTimeLanguagesCard } from "./cards/WakaTimeLanguagesCard";
import { WakaTimeProjectsCard } from "./cards/WakaTimeProjectsCard";
import { WakaTimeEditorsCard } from "./cards/WakaTimeEditorsCard";
import { WakaTimeMachinesCard } from "./cards/WakaTimeMachinesCard";
import { WakaTimeOperatingSystemsCard } from "./cards/WakaTimeOSCard";

// Add these imports
import { WakaTimeProductivityCard } from "./cards/WakaTimeProductivityCard";
import { WakaTimeFocusCard } from "./cards/WakaTimeFocusCard";
import { WakaTimeInterruptionsCard } from "./cards/WakaTimeInterruptionsCard";
import { WakaTimeCategoriesCard } from "./cards/WakaTimeCategoriesCard";
import { WakaTimeGoalCard } from "./cards/WakaTimeGoalCard";
import EmailToast from "../ui/email-toast";
import { ProfileBasicCard } from "./cards/ProfileBasicCard";
import { CurrentActivityCard } from "./cards/CurrentActivityCard";
import { TechStackCard } from "./cards/TechStackCard";
import { EducationCard } from "./cards/EducationCard";
import { CertificationsCard } from "./cards/CertificationsCard";
import { SocialLinksCard } from "./cards/SocialLinksCard";

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.23, 0.45, 0.47, 0.94] },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function WakaTimeDashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // WakaTime hook
  const {
    stats,
    isLoading: isWakaTimeLoading,
    error: wakaTimeError,
    fetchLatestStats,
    refreshStats,
    clearError: clearWakaTimeError,
    lastUpdated,
  } = useWakaTime();

  // User Profile hook
  const {
    profileData,
    isLoading: isProfileLoading,
    error: profileError,
    refreshProfile,
    clearError: clearProfileError,
  } = useUserProfile();

  // Combined loading and error states
  const isLoading = isWakaTimeLoading || isProfileLoading;
  const error = wakaTimeError || profileError;

  const clearError = () => {
    clearWakaTimeError();
    clearProfileError();
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      // Refresh both WakaTime and profile data
      await Promise.all([refreshStats(), refreshProfile()]);
    } finally {
      setIsRefreshing(false);
    }
  };

  const formatLastUpdated = (timestamp: string | null) => {
    if (!timestamp) return "Never";
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  // Loading skeleton
  if (isLoading && !stats && !profileData) {
    return (
      <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="space-y-2">
            <Skeleton className="h-8 w-64 bg-palette-2/20" />
            <Skeleton className="h-4 w-48 bg-palette-2/20" />
          </div>
          <Skeleton className="h-10 w-24 bg-palette-2/20" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          <Skeleton className="col-span-2 sm:col-span-4 md:col-span-4 h-32 rounded-lg bg-palette-3/30" />
          <Skeleton className="col-span-2 sm:col-span-2 md:col-span-4 h-32 rounded-lg bg-palette-3/30" />
          <Skeleton className="col-span-2 sm:col-span-2 md:col-span-2 h-32 rounded-lg bg-palette-3/30" />
          <Skeleton className="col-span-2 sm:col-span-4 md:col-span-4 h-32 rounded-lg bg-palette-3/30" />
          <Skeleton className="col-span-2 sm:col-span-2 md:col-span-2 h-32 rounded-lg bg-palette-3/30" />
          <Skeleton className="col-span-2 sm:col-span-2 md:col-span-2 h-32 rounded-lg bg-palette-3/30" />
          <Skeleton className="col-span-2 sm:col-span-2 md:col-span-2 h-32 rounded-lg bg-palette-3/30" />
          <Skeleton className="col-span-2 sm:col-span-4 md:col-span-4 h-32 rounded-lg bg-palette-3/30" />
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <TrendingUp className="h-12 w-12 text-destructive mx-auto" />
          <h2 className="text-2xl font-bold text-destructive">
            Unable to load data
          </h2>
          <p className="text-sm text-muted-foreground">{error}</p>
          <div className="flex gap-2 justify-center">
            <Button
              onClick={fetchLatestStats}
              variant="outline"
              disabled={isLoading}
              className="border-palette-1 text-palette-2 hover:bg-palette-1/10"
            >
              {isLoading ? "Retrying..." : "Retry"}
            </Button>
            <Button
              onClick={clearError}
              variant="ghost"
              className="text-palette-2 hover:bg-palette-2/20"
            >
              Dismiss
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // No stats state
  if (!stats && !profileData) {
    return (
      <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <Calendar className="h-12 w-12 text-palette-2 mx-auto" />
          <h2 className="text-2xl font-bold text-palette-2">
            No data available
          </h2>
          <p className="text-muted-foreground">
            Loading profile and coding activity insights...
          </p>
          <Button
            onClick={fetchLatestStats}
            className="bg-palette-4 hover:bg-palette-4/90 text-white"
          >
            Load Data
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        variants={fadeInLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold text-palette-2">
              Development Analytics<span className="text-palette-4">.</span>
            </h1>
            <Badge
              variant="secondary"
              className="text-xs bg-palette-2 text-palette-1 border-palette-2"
            >
              Last 7 days
            </Badge>
          </div>
          <p className="text-sm text-palette-2/80">
            Last updated: {formatLastUpdated(lastUpdated)}
          </p>
        </div>

        <Button
          onClick={handleRefresh}
          variant="outline"
          size="sm"
          disabled={isRefreshing || isLoading}
          className="flex items-center gap-2 border-palette-1 text-palette-1 hover:bg-palette-1/10"
        >
          <RefreshCw
            className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
          />
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </Button>
      </motion.div>

      {/* Dashboard Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* About Card */}
        <motion.div
          variants={cardVariants}
          className="col-span-full md:col-span-4 row-span-2 rounded-lg px-4 py-6 bg-palette-2/10 backdrop-blur-md flex flex-col justify-between border-none shadow-xl"
        >
          <div className="flex items-center mb-2">
            <Atom className="h-7 w-7 mr-2" />
            <h2 className="text-2xl font-bold">
              About Me<span className="text-palette-4">.</span>
            </h2>
          </div>
          <p className="text-sm">
            {profileData?.profile?.bio ||
              "I grew up in the beautiful state of Rajasthan. Even though it's not known as a technical hub, I was always curious about how technology works. Throughout my journey, I focused on understanding systems deeply rather than just using them. Today, I enjoy building clean and efficient software, working with machines, and constantly learning. I love my machines, I love technology — it's not just my work, it's my passion."}
          </p>
        </motion.div>

        {/* Profile Basic Info */}
        {/* <motion.div
          variants={cardVariants}
          className="col-span-2 sm:col-span-4 md:col-span-3 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
        >
          <div className="flex items-center mb-3">
            <User className="h-6 w-6 mr-2 text-palette-4" />
            <h3 className="text-md lg:text-lg font-semibold text-palette-2">
              Profile
            </h3>
          </div>
          <ProfileBasicCard profileData={profileData?.profile} />
        </motion.div> */}

         {/* Education */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-center col-span-full sm:col-span-4 bg-primary border border-palette-1 rounded-lg p-4 shadow-xl"
        >
          <div className="flex items-center mb-3">
            <GraduationCap className="h-6 w-6 mr-2 text-palette-4" />
            <h3 className="text-md lg:text-lg font-semibold text-palette-2">
              Education
            </h3>
          </div>
          <EducationCard profileData={profileData?.profile} />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-center col-span-full sm:col-span-4 order-1 md:order-none p-4 bg-primary border border-palette-1 rounded-lg shadow-xl"
        >
          <div className="flex items-center mb-2">
            <Mail className="h-5 w-5 mr-2 text-palette-4" />
            <h3 className="text-lg font-semibold">Contact Me</h3>
          </div>
          <p className="text-sm text-balance">
            Email!
            <EmailToast className="inline-flex gap-1 text-sm text-palette-4 hover:underline focus:outline-none">
              {profileData?.profile?.email || "rahuljangir.works@gmail.com"}
            </EmailToast>
          </p>
        </motion.div>

          {/* Best Day */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <Star className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Best Day
              </h3>
            </div>
            <WakaTimeBestDayCard
              date={stats.best_day?.date || ""}
              value={stats.best_day?.text || "0 mins"}
            />
          </motion.div>
        )}

      
        {/* Total Coding Time */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-4 md:col-span-4 row-span-1 rounded-lg px-4 py-6 bg-palette-2/10 backdrop-blur-md flex flex-col border-none shadow-xl"
          >
            <div className="flex items-center mb-2">
              <Clock className="h-7 w-7 mr-2 text-palette-4" />
              <h3 className="text-2xl font-bold text-palette-2">
                Total Coding Time
              </h3>
            </div>
            <WakaTimeTotalTimeCard
              weeklyTotalTime={stats.weekly_human_readable_total || "0 mins"}
            />
          </motion.div>
        )}

  {/* Daily Average */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <TrendingUp className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Average
              </h3>
            </div>
            <WakaTimeDailyAverageCard
              average={stats.weekly_human_readable_daily_average || "0 mins"}
            />
          </motion.div>
        )}

        {/* Current Activity */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 sm:col-span-4 md:col-span-3 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
        >
          <div className="flex items-center mb-3">
            <Activity className="h-6 w-6 mr-2 text-palette-4" />
            <h3 className="text-md lg:text-lg font-semibold text-palette-2">
              Current Activity
            </h3>
          </div>
          <CurrentActivityCard currentStatus={profileData?.current_status} />
        </motion.div>

        {/* Goal Progress */}
        {stats?.raw_data?.goals?.[0] && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-4 md:col-span-5 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Star className="h-6 w-6 mr-2 text-palette-4" />
                <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                  Daily Goal Progress
                </h3>
              </div>
              <div className="text-xs text-palette-2/60">
                {stats.raw_data.goals[0].status_percent_calculated || 0}%
                complete
              </div>
            </div>
            <WakaTimeGoalCard goal={stats.raw_data.goals[0]} />
          </motion.div>
        )}


        {/* Projects */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-4 md:col-span-3 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <FolderKanban className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Top Projects
              </h3>
            </div>
            <WakaTimeProjectsCard projects={stats.projects || []} />
          </motion.div>
        )}

         {/* Operating Systems */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <Monitor className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                OS
              </h3>
            </div>
            <WakaTimeOperatingSystemsCard
              operatingSystems={stats.operating_systems || []}
            />
          </motion.div>
        )}


        {/* Editors */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-2 md:col-span-3 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <Palette className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Editors
              </h3>
            </div>
            <WakaTimeEditorsCard editors={stats.editors || []} />
          </motion.div>
        )}

           {/* Tech Stack */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 sm:col-span-4 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
        >
          <div className="flex items-center mb-3">
            <Code2 className="h-6 w-6 mr-2 text-palette-4" />
            <h3 className="text-md lg:text-lg font-semibold text-palette-2">
              Tech Stack
            </h3>
          </div>
          <TechStackCard techStack={profileData?.tech_stack} />
        </motion.div>


        {/* Machines */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-2 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <Merge className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Machines
              </h3>
            </div>
            <WakaTimeMachinesCard machines={stats.machines || []} />
          </motion.div>
        )}


     
      

      
        {/* Top Languages */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-4 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <Braces className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Top Languages
              </h3>
            </div>
            <WakaTimeLanguagesCard languages={stats.languages || []} />
          </motion.div>
        )}
        {/* Categories Breakdown */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-4 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <Palette className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Activity Categories
              </h3>
            </div>
            <WakaTimeCategoriesCard categories={stats.categories || []} />
          </motion.div>
        )}

      

      {/* Profile Statistics */}
        {profileData?.statistics && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-4 md:col-span-4 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-3">
              <BarChart3 className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Profile Stats
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-2xl font-bold text-palette-4">
                  {profileData.statistics.total_coding_hours}h
                </div>
                <div className="text-xs text-muted-foreground">Total Hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-palette-4">
                  {profileData.statistics.current_streak}
                </div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-palette-4">
                  {profileData.statistics.repositories}
                </div>
                <div className="text-xs text-muted-foreground">
                  Repositories
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-palette-4">
                  {profileData.statistics.contributions_this_year}
                </div>
                <div className="text-xs text-muted-foreground">
                  Contributions
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Productivity Score */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <BarChart3 className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Productivity
              </h3>
            </div>
            <WakaTimeProductivityCard
              productivityScore={stats.productivity_score || 0}
            />
          </motion.div>
        )}

        {/* Focus Time */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <TrendingUp className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Focus Time
              </h3>
            </div>
            <WakaTimeFocusCard
              focusTimePercentage={stats.focus_time_percentage || 0}
            />
          </motion.div>
        )}
     

         {/* Interruptions */}
        {stats && (
          <motion.div
            variants={cardVariants}
            className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-2">
              <RefreshCw className="h-6 w-6 mr-2 text-palette-4" />
              <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                Interruptions
              </h3>
            </div>
            <WakaTimeInterruptionsCard
              interruptionCount={stats.interruption_count || 0}
            />
          </motion.div>
        )}

       
       

        {/* Certifications */}
        {/* Certifications - Only render if certifications exist */}
        {profileData?.profile?.certifications &&
          profileData.profile.certifications.length > 0 && (
            <motion.div
              variants={cardVariants}
              className="col-span-2 sm:col-span-2 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
            >
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 mr-2 text-palette-4" />
                <h3 className="text-md lg:text-lg font-semibold text-palette-2">
                  Certifications
                </h3>
              </div>
              <CertificationsCard profileData={profileData?.profile} />
            </motion.div>
          )}

        {/* Education Card */}
        {/* <motion.div
          variants={cardVariants}
          className="flex flex-col justify-center col-span-full sm:col-span-4 bg-primary border border-palette-1 rounded-lg p-4 shadow-xl"
        >
          <div className="flex items-center mb-2">
            <GraduationCap className="h-6 w-6 text-palette-4 mr-2" />
            <h3 className="text-md lg:text-lg font-semibold whitespace-nowrap">
              {profileData?.profile?.education?.[0]?.degree ||
                "Master of Computer Applications"}
            </h3>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p>
              {profileData?.profile?.education?.[0]?.institution ||
                "Savitribai Phule Pune University"}
            </p>
            <p className="flex items-center gap-1">
              <MapPin className="w-4 h-4 inline-block" />
              {profileData?.profile?.education?.[0]?.location || "Pune, MH"}
            </p>
          </div>
        </motion.div> */}

           {/* Social Links */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 sm:col-span-4 md:col-span-2 rounded-lg p-4 bg-primary border border-palette-1 shadow-xl flex flex-col"
        >
          <div className="flex items-center mb-3">
            <Share2 className="h-6 w-6 mr-2 text-palette-4" />
            <h3 className="text-md lg:text-lg font-semibold text-palette-2">
              Connect
            </h3>
          </div>
          <SocialLinksCard socialLinks={profileData?.social_links} />
        </motion.div>


        
      </motion.div>
    </div>
  );
}
