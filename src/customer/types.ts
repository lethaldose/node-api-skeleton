export interface Customer {
  id: string;
  name: string;
  email: string;
  created_at: Date;
}

export interface CustomerSignupPayload {
  name: string;
  email: string;
}
