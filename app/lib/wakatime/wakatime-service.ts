"use server"

import { StatsRange, WakaTimeAllStats } from "../types"

const WAKATIME_API_BASE = "https://wakatime.com/api/v1"

// Server-side function - API key stays secure
async function makeWakaTimeRequest(endpoint: string) {
    const apiKey = process.env.WAKATIME_API_KEY

    if (!apiKey) {
        throw new Error("WakaTime API key not configured")
    }

    const response = await fetch(`${WAKATIME_API_BASE}${endpoint}`, {
        headers: {
            Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        },
        next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
        throw new Error(`WakaTime API error: ${response.status}`)
    }

    return response.json()
}

// Updated to use only FREE endpoints
export async function getWakaTimeStats(range: StatsRange = "last_7_days"): Promise<WakaTimeAllStats> {
    try {
        // Only use the FREE stats endpoint
        const stats = await makeWakaTimeRequest(`/users/current/stats/${range}`)

        // Extract data from the free stats endpoint
        const statsData = stats.data

        return {
            stats,
            // Map free endpoint data to match your existing structure
            editors: {
                data: statsData.editors || [],
                range,
                is_up_to_date: statsData.is_up_to_date,
                percent_calculated: statsData.percent_calculated,
                timeout: statsData.timeout
            },
            languages: {
                data: statsData.languages || [],
                range,
                is_up_to_date: statsData.is_up_to_date,
                percent_calculated: statsData.percent_calculated,
                timeout: statsData.timeout
            },
            operatingSystems: {
                data: statsData.operating_systems || [],
                range,
                is_up_to_date: statsData.is_up_to_date,
                percent_calculated: statsData.percent_calculated,
                timeout: statsData.timeout
            },
            machines: {
                data: statsData.machines || [],
                range,
                is_up_to_date: statsData.is_up_to_date,
                percent_calculated: statsData.percent_calculated,
                timeout: statsData.timeout
            },
            range
        }
    } catch (error) {
        console.error("Failed to fetch WakaTime data:", error)
        throw error
    }
}

// Optional: Add a function to check if premium features are available
export async function checkWakaTimePremiumAccess(): Promise<boolean> {
    try {
        await makeWakaTimeRequest(`/users/current/insights/languages/last_7_days`)
        return true
    } catch (error) {
        return false
    }
}
