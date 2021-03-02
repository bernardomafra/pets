import React from 'react';

import Paw from '../assets/paw.svg';
import Cat from '../assets/cat.svg';
import Dog from '../assets/dog.svg';
import Bird from '../assets/bird.svg';
import Boy from '../assets/boy.svg';
import Girl from '../assets/girl.svg';
import {SvgProps} from 'react-native-svg';

type IconMap = {
  [key: string]: React.FC<SvgProps>;
};

export const getIconSvgByPetType = (name: string) => {
  const map: IconMap = {
    all: Paw,
    cat: Cat,
    dog: Dog,
    bird: Bird,
  };

  return map[name] || '';
};

export const getGenderSvgByName = (name: string) => {
  const map: IconMap = {
    boy: Boy,
    girl: Girl,
  };

  return map[name] || '';
};
