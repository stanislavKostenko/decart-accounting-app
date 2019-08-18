import {WorksInterface} from '@interfaces/work';

export interface CategoryInterface {
  title: string;
  description: string;
  works?: WorksInterface[];
  createdDate?: string;
  updatedDate?: string;
  id?: string;
}
