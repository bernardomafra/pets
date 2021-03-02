import Paw from '../assets/paw.svg';
import Cat from '../assets/cat.svg';
import Dog from '../assets/dog.svg';
import Bird from '../assets/bird.svg';
import Boy from '../assets/boy.svg';
import Girl from '../assets/girl.svg';

import * as Types from './types';

export const getIconSvgByPetType = (
  name: string,
): Types.GetIconSvgByPetTypeReturn => {
  const map: Types.IconMap = {
    all: Paw,
    cat: Cat,
    dog: Dog,
    bird: Bird,
  };

  return map[name] || Paw;
};

export const getGenderSvgByName = (
  name: string,
): Types.GetIconSvgByPetTypeReturn => {
  const map: Types.IconMap = {
    boy: Boy,
    girl: Girl,
  };

  return map[name] || '';
};
