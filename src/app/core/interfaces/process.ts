import { ProcessScope } from "../enums/process-scope";
import { ProcessType } from "../enums/process-type";

export interface Process {
  type:ProcessType;
  scope:ProcessScope;
  payload?:any; //Cahrge Utile
}
