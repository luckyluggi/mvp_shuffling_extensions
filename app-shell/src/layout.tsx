import { ComponentsState } from 'piral';
import { ErrorInfo } from './components/ErrorInfo'; 
import { LayoutDefault } from './layouts/LayoutDefault';

export const layout: Partial<ComponentsState> = {
  ErrorInfo,
  Layout: LayoutDefault,
};
