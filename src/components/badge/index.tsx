import React from 'react';
import * as Styles from './styles';
import {getIconSvgByKey} from '../../utils';

import {BadgeProps} from './types';

const Badge: React.FC<BadgeProps> = ({
  key,
  label,
  selected = false,
  onClickAction,
}: BadgeProps) => {
  let Icon = null;

  if (key) {
    Icon = getIconSvgByKey(key);
  }

  return (
    <Styles.Badge key={key} selected={selected} onPress={onClickAction}>
      {Icon && <Icon fill={selected ? '#FFF' : '#777777'} />}
      <Styles.BadgeText selected={selected}>{label}</Styles.BadgeText>
    </Styles.Badge>
  );
};

export default Badge;
