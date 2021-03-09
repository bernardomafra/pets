import React from 'react';

import {StackProps} from '../routes/types';

export type AppProviderProps = {
  children: React.ReactChild;
};

export interface IAppContext {
  customStatusBarColor: string;
  setCustomStatusBarColor: Function;
}

export type {StackProps};
