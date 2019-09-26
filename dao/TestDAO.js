import mongoose from 'mongoose';
import MongooseConnectionConfig from '../config/MongooseConnectionConfig';
import TestDataSchema from "../config/TestDataSchema";

class TestDAO {
    constructor() {

        //  this.db = db;

        var mongooseConnectionConfig = new MongooseConnectionConfig();

        console.log("findAll")

        var testDataSchema = new TestDataSchema();
        console.log("1")
        this.Record = mongoose.model("Record", testDataSchema.record);
        console.log("2")
    }

    findAll(callback) {

       
        // var rrecord = new Record();

/*
        Record.find({}, null,{limit:10}).then(function ( docs) {
           
            callback(docs);
        });
*/

this.Record.aggregate([
    {
        $project:{
           
            totalCount:{$sum:"$counts"},
            key:"$key",
            createdAt:"$createdAt"
        }
    },
    {
        $limit:10
    }
]).then(function ( docs) {
           
    callback(docs);
});
        //console.log(t);
    }

}

export default TestDAO;