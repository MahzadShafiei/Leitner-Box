import { levelStatus } from "src/app/enums/status"

export interface word {
      id : string;
      name: string;
      value :string;
      status: levelStatus;      
}