import { Product } from "../product.service";

export interface ApplicationState {
  online:boolean;
  products:Product[];
}
