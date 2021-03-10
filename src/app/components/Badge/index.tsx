import React from 'react';
import * as Styles from './styles';
import {getIconSvgByPetType} from '../../../entry/utils';

import * as Types from './types';
import {GlobalSheet} from '../../pages/global/styles';

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
    <Styles.Badge
      style={!petType ? GlobalSheet.boxShadow : {}}
      selected={selected}
      hasIcon={!!petType}
      onPress={onClickAction}>
      {Icon && <Icon fill={selected ? '#FFF' : '#777777'} />}
      <Styles.BadgeText selected={selected}>{label}</Styles.BadgeText>
    </Styles.Badge>
  );
};

export default Badge;
