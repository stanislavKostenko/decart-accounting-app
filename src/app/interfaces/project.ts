export interface ProjectInterface {
  title: string;
  description: string;
  id?: string;
  address: AddressInterface;
  square: number;
  archived?: boolean;
}

export interface AddressInterface {
  city: string;
  street: string;
  houseNumber: string;
  flatNumber: string;
}
