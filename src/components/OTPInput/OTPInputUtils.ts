export const isValidDigit = (digit: string): boolean => {
  return /^\d?$/.test(digit);
};

export const isValueComplete = (value: string, length: number): boolean => {
  return value.length === length && !value.includes("");
};

export const sanitizeValue = (value: string, length: number): string[] => {
  return value.split("").concat(Array(length).fill("")).slice(0, length);
};

export const sanitizePlaceholder = (
  placeholder: string,
  length: number
): string[] => {
  return placeholder
    ? placeholder.padEnd(length, " ").slice(0, length).split("")
    : Array(length).fill(" ");
};

export const extractPastedValue = (text: string, length: number): string => {
  return text.replace(/\D/g, "").slice(0, length);
};
