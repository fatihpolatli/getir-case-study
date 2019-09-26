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

    findAllWithData(postData, callback){

        var testDao = new TestDAO();
         testDao.findAllWithData(postData,function(data){

            callback(data);
         });
    }
}

export default TestService;