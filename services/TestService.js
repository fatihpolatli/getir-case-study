import  TestDAO from "../dao/TestDAO";

class TestService{

    constructor(){


    }

    findAll(callback){

        var testDao = new TestDAO();
         testDao.findAll(function(data){

            callback(data);
         });
    }
}

export default TestService;