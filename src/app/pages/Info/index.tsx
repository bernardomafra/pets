import React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import * as Styles from './styles';
import * as GlobalStyles from '../../../../global-styles';

import * as Types from './types';

import Card from '../../components/Card';
import CustomStatusBar from '../../components/CustomStatusBar';
import ArrowLeft from '../../assets/arrow-left.svg';

import PetsService from '../../../infra/services/pets';

const Info = ({route}: Types.InfoPageProps) => {
  const {petId, headerBackgroundColor} = route?.params;
  const [pet, setPet] = React.useState<Types.CardProps>();
  const navigation = useNavigation();

  React.useEffect(() => {
    async function loadPet() {
      if (petId) {
        const response = await PetsService.getById(petId);
        if (response) {
          setPet(response);
        }
      }
    }

    loadPet();
  }, [petId]);

  return (
    <>
      <CustomStatusBar
        backgroundColor={headerBackgroundColor}
        barStyle="light-content"
      />
      {pet?.photoSource && (
        <>
          <Styles.HeaderButton onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </Styles.HeaderButton>
          <Styles.Photo
            source={pet!.photoSource}
            backgroundColor={headerBackgroundColor}
          />
        </>
      )}
      <GlobalStyles.Container>
        <Styles.CardContainer>
          {pet && (
            <Card
              id={pet.id}
              photoSource={undefined}
              petType={pet.petType}
              title={pet.title}
              subtitle={pet.subtitle}
              age={pet.age}
              gender={pet.gender}
            />
          )}
        </Styles.CardContainer>
        <Styles.Avatar>
          {/* <Styles.AvatarColumn> */}
          <Styles.AvatarRow>
            <Styles.AvatarImage source={require('../../assets/jessi.png')} />
            <Styles.AvatarColumn>
              <Styles.AvatarRow justify="space-between">
                <Styles.AvatarText>Jessi Kurniawan</Styles.AvatarText>
                <Styles.AvatarDate>20 Jan 2021</Styles.AvatarDate>
              </Styles.AvatarRow>
              <Styles.AvatarSubtitle>Owner</Styles.AvatarSubtitle>
            </Styles.AvatarColumn>
          </Styles.AvatarRow>
          {/* </Styles.AvatarColumn> */}
        </Styles.Avatar>
      </GlobalStyles.Container>
    </>
  );
};

export default Info;
