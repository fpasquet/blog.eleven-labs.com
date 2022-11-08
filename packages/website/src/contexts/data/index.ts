import React from 'react';
import { DataContext, DataContextInterface } from './context';

export { DataProvider } from './provider';

export const useDataContext: () => DataContextInterface = () =>
  React.useContext<DataContextInterface>(DataContext);
