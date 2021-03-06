import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {notDisplayedFields} from '@mocks/form.mocks';
import {FormFields} from '@enums/fields';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {
  }

  generateForm(form: FormGroup, object: any) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (!(this.notDisplayedFields.includes(key as FormFields))) {
          const control = new FormControl(object[key], [Validators.required]);
          form.addControl(key, control);
        }

        if (typeof object[key] === 'object' && !(object[key] instanceof Array)) {
          const keyForm = new FormGroup({});
          form.addControl(key, keyForm);
          this.generateForm(keyForm, object[key]);
        }
      }
    }
  }

  createArrayOfControls(group: FormGroup | any) {
    return Object.keys(group.controls).filter((key: string) => {
      const abstractControls = group.get(key);
      if (!(abstractControls instanceof FormGroup)) {
        return key;
      }
    });
  }

  private get notDisplayedFields() {
    return notDisplayedFields;
  }
}
