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
  const [pet, setPet] = React.useState<Types.PetReturn>();
  const navigation = useNavigation();

  React.useEffect(() => {
    async function loadPet() {
      if (petId) {
        const response = await PetsService.getById(petId);
        if (response) {
          console.log(response);
          setPet(response);
        }
      }
    }

    loadPet();
  }, [petId]);

  return (
    <ScrollView>
      <CustomStatusBar backgroundColor="#FFF" barStyle="dark-content" />
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
          {pet?.owner && (
            <Avatar
              image={pet.owner.image}
              name={pet.owner.name}
              date={pet.owner.registerDate}
              subtitle={'Dono'}
            />
          )}
        </Styles.AvatarWrapper>
        <Styles.PetTraitsText>Características</Styles.PetTraitsText>
        <Styles.PetTraitsWrapper>
          {pet?.traits.map((trait) => (
            <Styles.PetTrait key={`${trait}-trait-${Math.random()}`}>
              <Badge label={trait} />
            </Styles.PetTrait>
          ))}
        </Styles.PetTraitsWrapper>
        <Styles.Description>
          {pet?.description || 'Sem descrição'}
        </Styles.Description>
        <Styles.Footer>
          <Styles.LikeButton style={GlobalStyles.GlobalSheet.boxShadow}>
            <Heart />
          </Styles.LikeButton>
          <Button size="fat">
            <Styles.ButtonText>Adotar agora</Styles.ButtonText>
          </Button>
        </Styles.Footer>
      </GlobalStyles.Container>
    </ScrollView>
  );
};

export default Info;
