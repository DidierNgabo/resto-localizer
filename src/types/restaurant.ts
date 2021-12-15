import { IBounds } from './bounds';
import { ILocation } from './coords';

export type RestaurantContextState = {
  restaurants: any;
  coords: ILocation | any;
  bounds: IBounds | any;
  setRestaurants: (restaurant: any) => void;
  setBounds: (bound: IBounds) => void;
  setCoords: (loc: ILocation) => void;
};
