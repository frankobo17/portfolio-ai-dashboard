import request from 'supertest';
import app from '../index'; // Adjust import for your express app

describe('Auth endpoints', () => {
  it('should not login with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'fake@example.com', password: 'wrong' });
    expect(res.status).toBe(401);
  });

  it('should login with admin credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: process.env.ADMIN_DEFAULT_EMAIL, password: process.env.ADMIN_DEFAULT_PASSWORD });
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.role).toBe('admin');
  });
});