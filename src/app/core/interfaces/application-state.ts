import { Product } from "./products";

export interface ApplicationState {
  online:boolean;
  products:Product[];
}
