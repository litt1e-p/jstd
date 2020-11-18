/**
 * Date format
 * @param date argv of type Date/String
 * @param format [Y, yyyy, M, MM, d, dd, h, hh, m, mm, s, ss] and [-/\s] separator supports
 */
export declare const formatDate: (date?: Date | string, format?: string) => string;
/**
 * Retrieve a date with specify timezone
 * @param year argv year
 * @param month argv month
 * @param day argv day
 * @param hour argv hour
 * @param minute argv minute
 * @param second argv second
 * @param timezone argv timezone like 'America/New_York'
 */
export declare const timezoneDate: (year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, timezone?: string) => Date | undefined;
