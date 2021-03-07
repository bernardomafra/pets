import React from 'react';

import * as CommonStyles from '../../styles';
import sheet from '../../sheet';

import * as Types from './types';

const WithoutPhoto = ({
  title,
  subtitle,
  age,
  Icon,
  Gender,
}: Types.CardWithoutPhotoProps) => {
  return (
    <CommonStyles.Container style={sheet.boxShadow}>
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
      </CommonStyles.Row>
    </CommonStyles.Container>
  );
};

export default WithoutPhoto;
