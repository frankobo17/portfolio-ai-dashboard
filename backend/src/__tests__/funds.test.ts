import request from 'supertest';
import app from '../index';

describe('Admin Funds', () => {
  let adminToken = '';
  beforeAll(async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: process.env.ADMIN_DEFAULT_EMAIL, password: process.env.ADMIN_DEFAULT_PASSWORD });
    adminToken = res.body.token;
  });

  it('should reject fund adjustment by non-admin', async () => {
    const res = await request(app)
      .post('/api/admin/funds')
      .set('Authorization', 'Bearer fake')
      .send({ userId: 'some-id', amount: 100, reason: 'test' });
    expect(res.status).toBe(401);
  });

  // Add more tests for successful fund adjustment, audit log, etc.
});