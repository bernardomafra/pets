import * as Types from './types';

export const getStringCapitalized = (
  word: string,
): Types.GetStringCapitalizedReturn => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
