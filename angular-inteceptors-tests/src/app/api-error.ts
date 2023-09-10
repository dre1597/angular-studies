import { TErrorResponse } from './responses';

export class ApiError extends Error {
  constructor(error: TErrorResponse) {
    super(JSON.stringify(error));
  }
}

export const handleApiError = (error: unknown) => {
  if (error instanceof ApiError) {
    const errorObj: TErrorResponse = JSON.parse(error.message);
    alert(errorObj.status + '-' + errorObj.message);
    return;
  }
  
  throw error;
};
