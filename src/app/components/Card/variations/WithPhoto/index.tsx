import React from 'react';

import * as CommonStyles from '../../styles';
import sheet from '../../sheet';

import * as Types from './types';

const WithPhoto = ({
  id,
  viewPetInfo,
  genderCapitalized,
  photoSource,
  genderColor,
  common,
}: Types.CardWithPhotoProps) => {
  const {title, subtitle, age, Icon, Gender} = common;

  return (
    <CommonStyles.Container
      style={sheet.boxShadow}
      onPress={() => viewPetInfo(id)}>
      <CommonStyles.LeftSide>
        {photoSource && (
          <CommonStyles.PhotoContainer>
            <CommonStyles.Photo source={photoSource} />
          </CommonStyles.PhotoContainer>
        )}
      </CommonStyles.LeftSide>
      <CommonStyles.RightSide>
        <CommonStyles.Column>
          <CommonStyles.Row width={160}>
            <CommonStyles.Title>{title}</CommonStyles.Title>
            {Icon && <Icon fill="#C4C4C4" />}
          </CommonStyles.Row>
          <CommonStyles.Row width={160}>
            <CommonStyles.Subtitle>{subtitle}</CommonStyles.Subtitle>
          </CommonStyles.Row>
        </CommonStyles.Column>
        <CommonStyles.Row justify="space-between">
          <CommonStyles.Age>{age}</CommonStyles.Age>
          <CommonStyles.Dot />
          <Gender />
          <CommonStyles.Gender color={genderColor}>
            {genderCapitalized}
          </CommonStyles.Gender>
        </CommonStyles.Row>
      </CommonStyles.RightSide>
    </CommonStyles.Container>
  );
};

export default WithPhoto;
