import {SvgProps} from 'react-native-svg';

export type IconMap = {
  [key: string]: React.FC<SvgProps>;
};

export type GetIconSvgByPetTypeReturn = React.FC<SvgProps>;
