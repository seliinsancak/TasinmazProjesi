import { Mahalle } from './mahalle.model';

export interface Tasinmaz {
  id: number;
  name: string;
  mahalleId: number;
  mahalle?: {
    id: number;
    name: string;
  };
}
