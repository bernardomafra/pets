import React from 'react';

import * as CommonStyles from '../../styles';
import {GlobalSheet} from '../../../../pages/global/styles';

import * as Types from './types';
import {Image} from 'react-native';

const WithPhoto = ({
  id,
  viewPetInfo,
  genderCapitalized,
  photoSource,
  genderColor,
  photoBackgroundColor,
  common,
}: Types.CardWithPhotoProps) => {
  const {title, subtitle, age, Icon, Gender} = common;

  return (
    <CommonStyles.Container
      style={GlobalSheet.boxShadow}
      onPress={() => viewPetInfo(id)}>
      <CommonStyles.LeftSide>
        {photoSource && <CommonStyles.Photo source={photoSource} />}
      </CommonStyles.LeftSide>
      <CommonStyles.RightSide>
        <CommonStyles.Row spaced justify="space-between">
          <CommonStyles.Title>{title}</CommonStyles.Title>
          {Icon && <Icon fill="#C4C4C4" />}
        </CommonStyles.Row>
        <CommonStyles.Row spaced>
          <CommonStyles.Subtitle>{subtitle}</CommonStyles.Subtitle>
        </CommonStyles.Row>
        <CommonStyles.SmallRow spaced justify="space-between">
          <CommonStyles.Age>{age}</CommonStyles.Age>
          <CommonStyles.Dot />
          <Gender />
          <CommonStyles.Gender color={genderColor}>
            {genderCapitalized}
          </CommonStyles.Gender>
        </CommonStyles.SmallRow>
      </CommonStyles.RightSide>
    </CommonStyles.Container>
  );
};

export default WithPhoto;
