import React from 'react';
import {useNavigation} from '@react-navigation/native';

import * as Styles from './styles';
import * as GlobalStyles from '../global/styles';

import * as Types from './types';

import Card from '../../components/Card';
import CustomStatusBar from '../../components/CustomStatusBar';
import Avatar from '../../components/Avatar';
import Badge from '../../components/Badge';

import ArrowLeft from '../../assets/arrow-left.svg';
import Heart from '../../assets/heart.svg';

import PetsService from '../../../infra/services/pets';
import Button from '../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';

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
    <ScrollView>
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
      <GlobalStyles.Container backgroundColor="#FFF">
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
        <Styles.AvatarWrapper>
          <Avatar
            image={require('../../assets/jessi.png')}
            name={'Jessi Kurniawan'}
            date={'20 Jan 2021'}
            subtitle={'Owner'}
          />
        </Styles.AvatarWrapper>
        <Styles.PetTraitsText>Traits</Styles.PetTraitsText>
        <Styles.PetTraitsWrapper>
          <Styles.PetTrait>
            <Badge label="Active" />
          </Styles.PetTrait>
          <Styles.PetTrait>
            <Badge label="Friendly" />
          </Styles.PetTrait>
          <Styles.PetTrait>
            <Badge label="Loyal" />
          </Styles.PetTrait>
          <Styles.PetTrait>
            <Badge label="Playful" />
          </Styles.PetTrait>
        </Styles.PetTraitsWrapper>
        <Styles.Description>
          Buddy is an active, playful, yet friendly and loyal dog for our
          family. He loves to play fetch with people, and he don’t mind if
          strange people pet his head. Buddy loves to wake up in the morning and
          then wake you up too. He is friendly to everyone, even to cats and
          bunnies.
        </Styles.Description>
        <Styles.Footer>
          <Styles.LikeButton style={GlobalStyles.GlobalSheet.boxShadow}>
            <Heart />
          </Styles.LikeButton>
          <Button size="fat">
            <Styles.ButtonText>Adopt Now</Styles.ButtonText>
          </Button>
        </Styles.Footer>
      </GlobalStyles.Container>
    </ScrollView>
  );
};

export default Info;
