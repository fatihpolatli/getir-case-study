import mongoose from 'mongoose';
import MongooseConnectionConfig from '../config/MongooseConnectionConfig';
import TestDataSchema from "../config/TestDataSchema";

class TestDAO {
    constructor() {


        var mongooseConnectionConfig = new MongooseConnectionConfig();



        this.testDataSchema = new TestDataSchema();

        if( mongoose.models.Record == null){


            this.Record = mongoose.model("Record", this.testDataSchema.getRecord());
        }else{

            this.Record = mongoose.model("Record");
        }


    }

   

    findAll(postData, callback) {


        let minValue = postData.minCount;
        let maxValue = postData.maxCount;

        let startDate = new Date(postData.startDate);
        let endDate = new Date(postData.endDate);


        this.Record.aggregate([
            {
                $project: {

                    totalCount: { $sum: "$counts" },
                    key: "$key",
                    createdAt: "$createdAt"
                }
            },
            {
                $match: {

                    $and: [{
                        totalCount: {
                            $gt: minValue,
                            $lt: maxValue
                        }
                    },
                    {
                        createdAt: {
                            $gt: startDate,
                            $lt: endDate
                        }
                    }]

                }
            },
            {
                $limit: 10
            }
        ]).then(function (docs) {

            callback(docs);
        });

    }

}

export default TestDAO;