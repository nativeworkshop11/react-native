export enum HomeStackScreenNames {
  HOME = '/home',
  PLP = '/plp',
  PDP = '/pdp',
}

export type HomeStackParamsList = {
  [HomeStackScreenNames.HOME]: undefined;
  [HomeStackScreenNames.PLP]: {keyword: string} | undefined;
  [HomeStackScreenNames.PDP]: {pid: string};
};
