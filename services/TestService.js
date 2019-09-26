import TestDAO from "../dao/TestDAO";

class TestService {

    constructor() {


    }



    findAll(postData, callback) {

        var testDao = new TestDAO();
        testDao.findAll(postData, function (data) {

            callback(data);
        });
    }
}

export default TestService;