import {AddressInterface, ProjectInterface} from '@interfaces/project';
import {FormFields} from '@enums/fields';

export const emptyAddressForm: AddressInterface = {
  city: '',
  street: '',
  houseNumber: null,
  flatNumber: null
};

export const emptyProjectForm: ProjectInterface = {
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
