export type API_1_RESP = {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: { title: string; key_skill: string };
  address: {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: { lat: number; lng: number };
  };
  credit_card: { cc_number: string };
  subscription: {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
  };
};

export type API_2_RESP = {
  id: number;
  uuid: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  ip: string;
  macAddress: string;
  website: string;
  image: string;
};

export type ReducerActionType = {
  type: string;
  payload?: Partial<API_1_RESP | API_2_RESP>[] | null;
};
