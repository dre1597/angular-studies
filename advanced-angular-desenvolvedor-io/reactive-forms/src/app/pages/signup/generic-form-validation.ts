import { FormGroup } from '@angular/forms';

export interface DisplayMessage {
  [key: string]: string;
}

export interface ValidationMessages {
  [key: string]: { [key: string]: string };
}

export class GenericValidator {
  constructor(private validationMessages: ValidationMessages) {}

  processMessages(container: FormGroup): { [key: string]: string } {
    const messages: DisplayMessage = {};
    for (const controlKey in container.controls) {
      // eslint-disable-next-line no-prototype-builtins
      if (container.controls.hasOwnProperty(controlKey)) {
        const c = container.controls[controlKey];

        if (c instanceof FormGroup) {
          const childMessages = this.processMessages(c);
          Object.assign(messages, childMessages);
        } else {
          if (this.validationMessages[controlKey]) {
            messages[controlKey] = '';
            if ((c.dirty || c.touched) && c.errors) {
              Object.keys(c.errors).forEach((messageKey) => {
                if (this.validationMessages[controlKey][messageKey]) {
                  messages[controlKey] +=
                    this.validationMessages[controlKey][messageKey] + '<br />';
                }
              });
            }
          }
        }
      }
    }
    return messages;
  }
}
