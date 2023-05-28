import { Priority } from "./priority";

export default interface ServerResponse {
  userName: string;
  response: {
    pacientPosition: number;
    pacientColor: Priority;
    colors: {
      red: number;
      yellow: number;
      green: number;
      blue: number;
    };
  };
}
