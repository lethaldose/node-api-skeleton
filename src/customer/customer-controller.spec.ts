import request from 'supertest';
import { getApp } from '../app';

describe('/api/v1/customers', () => {
  const app = getApp();

  it('gets customer by id', async () => {
    const res = await request(app).get('/api/v1/customers/c-0001');
    const { customer } = res.body;
    expect(res.status).toEqual(200);
    expect(customer).toEqual({
      id: 'c-0001',
      name: 'John Doe',
      email: 'foo@example.com',
      created_at: expect.any(String),
    });
  });

  it('creates customer', async () => {
    const attrs = {
      email: 'joe@example.com',
      name: 'Joe Doe',
    };
    const res = await request(app).post('/api/v1/customers').send(attrs);

    const { customer } = res.body;
    expect(res.status).toEqual(201);
    expect(customer).toEqual({
      id: expect.any(String),
      name: 'Joe Doe',
      email: 'joe@example.com',
      created_at: expect.any(String),
    });
  });
});
