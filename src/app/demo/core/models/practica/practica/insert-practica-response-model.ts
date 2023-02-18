export interface InsertPracticaResponseModel {
  StatusCode: number;
  success: boolean;
  message: string;
  response: Data;
}

interface Data {
    data: number;
  }

