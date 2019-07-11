export interface Project {
  title: string;
  description: string;
  id?: string;
  address: Address;
  archived?: boolean;
}

export interface Address {
  city: string;
  street: string;
  houseNumber: string;
  flatNumber: string;
}
