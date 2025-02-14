/**
 * Formats a `Date` object according to a specified format string.
 *
 * @param date - The `Date` object to be formatted.
 * @param format - The format string that defines the structure of the formatted date.
 *                 Supports the following tokens:
 *                 - `YYYY` → 4-digit year (e.g., 2025)
 *                 - `MM`   → 2-digit month (01-12)
 *                 - `DD`   → 2-digit day (01-31)
 *                 - `HH`   → 2-digit hour (00-23)
 *                 - `mm`   → 2-digit minutes (00-59)
 *                 - `ss`   → 2-digit seconds (00-59)
 *
 * @returns The formatted date as a string.
 *
 * @example
 * ```typescript
 * const date = new Date("2025-02-14T15:30:00");
 * console.log(formatDate(date, "DD/MM/YYYY HH:mm:ss")); // "14/02/2025 15:30:00"
 * console.log(formatDate(date, "YYYY-MM-DD")); // "2025-02-14"
 * ```
 */
export function formatDate(date: Date, format = 'DD-MM-YYYY HH:mm'): string {
  const map = {
    YYYY: date.getFullYear().toString(),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    DD: String(date.getDate()).padStart(2, '0'),
    HH: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0')
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => map[match as keyof typeof map]);
}
