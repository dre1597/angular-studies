export type THTTPResponse<T> = {
  data: T | null;
  error: TErrorResponse | null;
};

export type TTokenResponse = {
  token: string;
};

export type TTestTokenResponse = {
  message: string;
};

export type TErrorResponse = {
  message: string;
  status: number;
  statusText: string;
};
