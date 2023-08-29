/**
 * To determine a var is Date type
 * @param date var to determine
 * @param validDate validDate equals true ? not invalid Date : Date, default is true
 */
export declare const dateable: (date?: any, validDate?: boolean) => boolean;
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
/**
 * Retrieve a quarter string with another quarter and delta quarters which are used to calculate
 * @param quarter given quarter, eg. '2021Q3'
 * @param delta calculation quarter number, negative means backward, positive means forward. eg. 3, -1, 10, -7
 * @param separator separator for year and quarter, default is 'Q'
 * @returns string | undefined
 */
export declare const quarterable: (quarter: any, delta?: number, separator?: string) => string | undefined;
