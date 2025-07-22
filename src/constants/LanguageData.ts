interface LanguageInterface {
    code:string,
    name:string
}

export const LANGUAGES:LanguageInterface[] = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesian' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
  ];

  export const DEFAULT_LANGUAGE:LanguageInterface={
    code:'en',
    name:'English'
  }