export function formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
}

export function calculatePercentage(value: number, total: number): number {
    return total > 0 ? (value / total) * 100 : 0;
}

export function getTopLanguages(languages: any[], limit: number = 5) {
    return languages
        .sort((a, b) => b.total_seconds - a.total_seconds)
        .slice(0, limit);
}

export function generateWeeklyData(totalSeconds: number) {
    // Mock weekly data generation
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const avgDaily = totalSeconds / (7 * 3600); // Average hours per day

    return days.map(day => ({
        date: day,
        day,
        hours: Math.round(avgDaily * (0.7 + Math.random() * 0.6))
    }));
}
