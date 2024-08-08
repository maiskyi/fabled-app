export type LocalizationFormatterFn = (v: any) => unknown;

export type LocalizationLngFormatters = Record<string, LocalizationFormatterFn>;

export type LocalizationFormatters = Record<string, LocalizationLngFormatters>;
