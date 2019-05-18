export const formatRuntime = (runtime) => Math.floor(runtime / 60) + 'h ' + runtime % 60 + 'm';

export const formatRevenue = (revenue) => revenue ? `$${revenue} M` : '-';
