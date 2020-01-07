import {ComponentClass, FC} from 'react';
import {Route} from 'router5';

export interface CustomRoute extends Route {
  component?: ReactAnyComponent,
  requireAuth?: boolean,
  isNotAvailableAfterLogin?: boolean,
  title?: string,
  children?: CustomRoute[],

  loadComponent?: AsyncComponentPromise,
}

export type ReactAnyComponent<Props = any, State = any> = FC<Props> | ComponentClass<Props, State>;

export type EsModuleDefault = {
  default: ReactAnyComponent,
}

export type EsModuleComponent = {
  [key: string]: ReactAnyComponent,
}

export type AsyncComponentPromise = () => Promise<EsModuleDefault | EsModuleComponent>;
