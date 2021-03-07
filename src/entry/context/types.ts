import React from 'react';

import {StackProps} from '../routes/types';

export type AppProviderProps = {
  children: React.ReactChild;
};

export interface IAppContext {
  navigation: StackProps | undefined;
}

export type {StackProps};
