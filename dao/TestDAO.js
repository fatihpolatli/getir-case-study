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

    findAll(callback, minVal, maxVal, startDateParam, endDateParam) {


        let minValue = minVal | 0;
        let maxValue = minVal | 0;

        let startDate = new Date(startDateParam);
        let endDate = new Date(endDateParam);



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
                    totalCount: {
                        $gt: minValue,
                        $lt: maxValue
                    },
                    createdAt: {
                        $gt: startDate,
                        $lt: endDate
                    }
                }
            },
            {
                $limit: 10
            }
        ]).then(function (docs) {

            callback(docs);
        });
        //console.log(t);
    }

    findAllWithData(postData, callback) {


        let minValue = postData.minCount;
        let maxValue = postData.maxCount;

        let startDate = new Date(postData.startDate);
        let endDate = new Date(postData.endDate);

        console.log(minValue, maxValue, startDate, endDate)

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
        //console.log(t);
    }

}

export default TestDAO;