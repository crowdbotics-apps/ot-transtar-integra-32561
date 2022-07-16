

export type FirmData = {
  name: string
  account_number: string;
  accesscoordinator_set: {email: string, name: string}[];
  authorizedusers_set: {email: string, name: string}[];
  street_address: string;
  street_address_two: string;
  city: string;
  state: string;
  postal: string;
  country: string;
  id?: number
}