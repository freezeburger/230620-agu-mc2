import { Process } from "./process";

export enum ProcessResponseType{
  ACCEPTED = 'ProcessResponseType:ACCEPTED',
  REJECTED = 'ProcessResponseType:REJECTED',
}

export interface ProcessResponse {
  type:ProcessResponseType;
  process:Process;
}
