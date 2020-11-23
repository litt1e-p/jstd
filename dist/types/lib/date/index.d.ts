/**
 * Date format
 * @param date argv of type Date/String
 * @param format [Y, yyyy, M, MM, d, dd, h, hh, m, mm, s, ss] and [-/\s] separator supports, default is 'yyyy-MM-dd hh:mm:ss'
 */
export declare const formatDate: (date?: Date | string, format?: string) => string;
/**
 * Retrieve a date with specify timezone
 * @param year argv year, default is 0
 * @param month argv month, default is 0
 * @param day argv day, default is 0
 * @param hour argv hour, default is 0
 * @param minute argv minute, default is 0
 * @param second argv second, default is 0
 * @param timezone argv timezone like 'America/New_York'
 */
export declare const timezoneDate: (year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, timezone?: string) => Date | undefined;
