export interface ResponseModel<T = void> {
  data: T;
  msg: string;
  returnCode: string;
}


export interface FResponse {
  fileName: string;
  fileData: Blob;
}