const request = require('supertest');
const app = require('../app');

describe('App endpoints', () => {
  test('GET / returns greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello from CI/CD Pipeline');
  });

  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('unknown route returns 404', async () => {
    const res = await request(app).get('/nope');
    expect(res.statusCode).toBe(404);
  });
});
