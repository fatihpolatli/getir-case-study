import express from 'express';

import TestService from "../services/TestService";
import ResponseData from "../models/ResponseData";


var router = express.Router();



router.post('/', function (req, res, next) {

  var testService = new TestService();


  var postData = req.body;

  var t = testService.findAll(postData, function (data) {


    const responseObject = {

      msg: "success",
      code: 0,
      records: data
    };
    res.send(responseObject);

  });
});


export default router;
