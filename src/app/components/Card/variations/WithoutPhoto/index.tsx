import React from 'react';

import * as CommonStyles from '../../styles';
import * as Styles from './styles';
import {GlobalSheet} from '../../../../pages/global/styles';

import * as Types from './types';

const WithoutPhoto = ({
  title,
  subtitle,
  age,
  Icon,
  Gender,
}: Types.CardWithoutPhotoProps) => {
  return (
    <CommonStyles.Container direction="column" style={GlobalSheet.boxShadow}>
      <Styles.RowGroup>
        <CommonStyles.Row spaced>
          <CommonStyles.Title>{title}</CommonStyles.Title>
          <Gender />
        </CommonStyles.Row>
        <CommonStyles.Row width="35%" spaced justify="space-between">
          {Icon && <Icon fill="#C4C4C4" />}
          <CommonStyles.Subtitle>{subtitle}</CommonStyles.Subtitle>
        </CommonStyles.Row>
        <CommonStyles.Row spaced>
          <CommonStyles.Age>{age}</CommonStyles.Age>
        </CommonStyles.Row>
      </Styles.RowGroup>
    </CommonStyles.Container>
  );
};

export default WithoutPhoto;
