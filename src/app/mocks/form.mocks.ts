import {Address, Project} from '@interfaces/project';
import {FormFields} from '@enums/fields';

export const emptyAddressForm: Address = {
  city: '',
  street: '',
  houseNumber: null,
  flatNumber: null
};

export const emptyProjectForm: Project = {
  title: '',
  description: '',
  square: null,
  address: emptyAddressForm
};

export const notDisplayedFields = [
  FormFields.Address,
  FormFields.Id,
  FormFields._Id,
  FormFields.CreatedDate,
  FormFields.Archived,
  FormFields.UpdatedDate
];
