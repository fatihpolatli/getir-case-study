import request from 'supertest';
import '@babel/polyfill';
import app from '../app'


describe('Post Test', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api')
            .send({

                startDate: "2016-07-06",
                endDate: "2016-07-08",
                minCount: 2700,
                maxCount: 3000,

            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('records')
    })
})