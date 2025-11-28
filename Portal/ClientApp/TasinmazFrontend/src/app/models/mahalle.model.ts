import { Ilce } from './ilce.model';

export interface Mahalle {
  id: number;
  name: string;
  ilceId: number;
  ilce?: Ilce;
}
