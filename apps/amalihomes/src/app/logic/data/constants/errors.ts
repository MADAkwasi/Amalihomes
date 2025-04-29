type LanguageCode = 'en' | 'fr' | 'de';

interface ErrorMessages {
  [key: string]: string;
}

type Errors = {
  [key in LanguageCode]: ErrorMessages;
};

export const errors: Errors = {
  en: {
    required: 'This is a required field',
    invalidName: 'Name must be at least 3 characters long and contain only letters and spaces',
    invalidEmail: 'Please enter a valid email address',
    minlength: 'The input is too short',
    maxlength: 'The input is too long',
    pattern: 'The format is invalid',
  },
  fr: {
    required: 'Ceci est un champ obligatoire',
    invalidName: 'Le nom doit comporter au moins 3 caractères et contenir uniquement des lettres et des espaces',
    invalidEmail: "S'il vous plaît, mettez une adresse email valide",
    minLength: "L'entrée est trop courte",
    maxLength: "L'entrée est trop longue",
    pattern: "Le format n'est pas valide",
  },
  de: {
    required: 'Dit is een verplicht veld',
    invalidName: 'De naam moet minimaal 3 tekens lang zijn en alleen letters en spaties bevatten',
    invalidEmail: 'Voer een geldig e-mailadres in',
    minLength: 'De invoer is te kort',
    maxLength: 'De invoer is te lang',
    pattern: 'Het formaat is ongeldig',
  },
};
