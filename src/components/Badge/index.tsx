import React from 'react';
import * as Styles from './styles';
import {getIconSvgByPetType} from '../../utils';

import * as Types from './types';

const Badge: React.FC<Types.BadgeProps> = ({
  petType,
  label,
  selected = false,
  onClickAction,
}) => {
  let Icon = null;

  if (petType) {
    Icon = getIconSvgByPetType(petType);
  }

  return (
    <Styles.Badge selected={selected} onPress={onClickAction}>
      {Icon && <Icon fill={selected ? '#FFF' : '#777777'} />}
      <Styles.BadgeText selected={selected}>{label}</Styles.BadgeText>
    </Styles.Badge>
  );
};

export default Badge;
