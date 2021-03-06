import Paw from '../../../app/assets/paw.svg';
import Cat from '../../../app/assets/cat.svg';
import Dog from '../../../app/assets/dog.svg';
import Bird from '../../../app/assets/bird.svg';
import Boy from '../../../app/assets/boy.svg';
import Girl from '../../../app/assets/girl.svg';

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
