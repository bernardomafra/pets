import * as Types from './types';

export const getCardGenderColorByGender = (
  gender: string,
): Types.GetCardGenderColorByGenderReturn => {
  const map: Types.CardGenderColorsMap = {
    boy: '#0096D1',
    girl: '#F01159',
  };

  return map[gender];
};

export const getRandomColor = (): string => {
  return (
    'rgb(' +
    Math.floor(Math.random() * 100) +
    ',' +
    Math.floor(Math.random() * 100) +
    ',' +
    Math.floor(Math.random() * 100) +
    ')'
  );
};
