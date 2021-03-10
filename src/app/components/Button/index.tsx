import React from 'react';

import * as Styles from './styles';
import * as Types from './types';

const Button = ({children, backgroundColor, size}: Types.ButtonProps) => {
  return (
    <Styles.ButtonContainer size={size} backgroundColor={backgroundColor}>
      {children}
    </Styles.ButtonContainer>
  );
};

export default Button;
