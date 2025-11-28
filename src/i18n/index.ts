import { es } from './es';
import { en } from './en';
import { de } from './de';

export const languages = {
    es,
    en,
    de
};

export type Language = 'es' | 'en' | 'de';

export const defaultLang: Language = 'es';
