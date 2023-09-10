import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {
  public handleError(error: unknown): void {
    console.warn('Caught by Custom Error Handler:', error);
  }
}
