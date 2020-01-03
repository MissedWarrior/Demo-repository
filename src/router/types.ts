import {ComponentClass, FC} from 'react';
import {Route} from 'router5';

export interface Routes extends Route {
  component?: ReactAnyComponent,
  requireAuth?: boolean,
  isNotAvailableAfterLogin?: boolean,
  title?: string,
  children?: Routes[],

  loadComponent?: AsyncComponentPromise,
}

export type ReactAnyComponent<Props = object, State = object> = FC<Props> | ComponentClass<Props, State>;

export type EsModuleComponent = {
  default: ReactAnyComponent,
}

export type AsyncComponentPromise = () => Promise<ReactAnyComponent | EsModuleComponent>;
