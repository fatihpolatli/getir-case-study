import express from 'express';

import TestService from "../services/TestService";
import ResponseData from "../models/ResponseData";

var router = express.Router();

/* GET home page. */


router.get('/', function (req, res, next) {

  var testService = new TestService();

  var t = testService.findAll(function (data) {

    console.log("test")

    //var responseData = new ResponseData();

    //responseData.setRecords(data);
    res.send(data);

  });
  console.log(t);
});

router.post('/', function (req, res, next) {

  var testService = new TestService();

  console.log(req.body);

  var postData = req.body;

  var t = testService.findAllWithData(postData, function (data) {

    console.log("test")

    //var responseData = new ResponseData();

    //responseData.setRecords(data);
    res.send(data);

  });
  console.log(t);
});


export default router;
