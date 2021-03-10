import React from 'react';

import * as Styles from './styles';
import * as Types from './types';

const Avatar = ({image, name, subtitle, date}: Types.AvatarProps) => {
  return (
    <Styles.Avatar>
      <Styles.AvatarRow>
        {image ? <Styles.AvatarImage source={image} /> : <Styles.NoPhoto />}
        <Styles.AvatarColumn>
          <Styles.AvatarRow justify="space-between">
            <Styles.AvatarText>{name}</Styles.AvatarText>
            <Styles.AvatarDate>{date || ''}</Styles.AvatarDate>
          </Styles.AvatarRow>
          <Styles.AvatarSubtitle>{subtitle}</Styles.AvatarSubtitle>
        </Styles.AvatarColumn>
      </Styles.AvatarRow>
    </Styles.Avatar>
  );
};

export default Avatar;
