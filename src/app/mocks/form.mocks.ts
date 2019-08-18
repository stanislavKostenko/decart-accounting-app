import {AddressInterface, ProjectInterface} from '@interfaces/project';
import {FormFields} from '@enums/fields';
import {CategoryInterface} from '@interfaces/category';
import {WorksInterface} from '@interfaces/work';

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

export const emptyCategory: CategoryInterface = {
  title: '',
  description: ''
};

export const emptyWork: WorksInterface = {
  title: '',
  units: ''
};

export const notDisplayedFields = [
  FormFields.Address,
  FormFields.Id,
  FormFields._Id,
  FormFields.CreatedDate,
  FormFields.Archived,
  FormFields.UpdatedDate,
  FormFields.Works,
  FormFields.CategoryId
];
