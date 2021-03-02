import React from 'react';
import * as Styles from './styles';
import {getIconSvgByName} from '../../utils';

import {BadgeProps} from './types';

const Badge: React.FC<BadgeProps> = ({
  name,
  label,
  selected = false,
  onClickAction,
}: BadgeProps) => {
  let Icon = null;

  if (name) {
    Icon = getIconSvgByName(name);
  }

  return (
    <Styles.Badge selected={selected} onPress={onClickAction}>
      {Icon && <Icon fill={selected ? '#FFF' : '#777777'} />}
      <Styles.BadgeText selected={selected}>{label}</Styles.BadgeText>
    </Styles.Badge>
  );
};

export default Badge;
