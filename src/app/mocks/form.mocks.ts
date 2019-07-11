import {Address, Project} from '../interfaces/project';
import {FormFields} from '../enums/fields';

export const emptyAddressForm: Address = {
  city: '',
  street: '',
  houseNumber: null,
  flatNumber: null
};

export const emptyProjectForm: Project = {
  title: '',
  description: '',
  address: emptyAddressForm
};

export const notDisplayedFields = [
  FormFields.Address,
];
