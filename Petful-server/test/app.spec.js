const app = require('../src/app')
const supertest = require('supertest');

describe('App', () => {
  it('GET /cats responds with 200', () => {
    return supertest(app)
      .get('/api/cats')
      .expect(200)
  })
  it('GET /dogs responds with 200', () => {
    return supertest(app)
      .get('/api/dogs')
      .expect(200)
  })
  it('GET /people responds with 200', () => {
    return supertest(app)
      .get('/api/people')
      .expect(200)
  })
  it('DELETE /people responds with 200', () => {
    return supertest(app)
      .delete('/api/people')
      .expect(202)
  })
  it('DELETE /cats responds with 200', () => {
    return supertest(app)
      .delete('/api/cats')
      .expect(202)
  })
  it('DELETE /dogs responds with 200', () => {
    return supertest(app)
      .delete('/api/dogs')
      .expect(202)
  })


})

