'use strict';

let app = require('../..');
import request from 'supertest';
import studentSchema from '../../data/student-response-schema.json';
import jsonschema from 'jsonschema';

let schemaValidator = new jsonschema.Validator();

describe('Student API:', () => {

    it('should got matched student when given search name query', (done) => {
        let name = 'ran';

        request(app)
            .get('/api/student?name=' + name)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                (!err).should.be.true;
                schemaValidator.validate(res.body, studentSchema).valid.should.be.true;
                res.body.data[0].name.should.be.equal('Liu Ran');
                done();
            });
    });

    it('should got all student when given search name is empty', (done) => {
        let name = '';

        request(app)
            .get('/api/student?name=' + name)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                (!err).should.be.true;
                schemaValidator.validate(res.body, studentSchema).valid.should.be.true;
                res.body.data.length.should.be.equal(res.body.total);
                done();
            });
    });

    afterEach((done) => {
        let server = app.get('server');
        if (!server.listening) {
            return done();
        }
        server.close(done);
    });

});
