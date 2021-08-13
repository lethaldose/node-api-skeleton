import { nanoid } from 'nanoid';

import type { Customer, CustomerSignupPayload } from './types';

class CustomerService {
  signup({ name, email }: CustomerSignupPayload): Customer {
    return {
      id: nanoid(),
      name,
      email,
      created_at: new Date(),
    } as Customer;
  }

  getById(id: string): Customer {
    return {
      id,
      name: 'John Doe',
      email: 'foo@example.com',
      created_at: new Date(),
    } as Customer;
  }
}

export const customerService = new CustomerService();
