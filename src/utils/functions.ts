/**
 * Truncates the input text if it exceeds the specified maximum length.
 * @param {string} text - The input text to be truncated.
 * @param {number} [maxLength=60] - The maximum allowed length before truncation.
 * @returns {string} - The truncated text with an ellipsis (...) appended if truncated.
 */
export function textSlicer(text: string, maxLength: number = 60): string {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}
