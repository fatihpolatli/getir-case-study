import mongoose from 'mongoose';

class TestDataSchema {
  constructor() {



  }

  getRecord() {


    var Schema = mongoose.Schema;

    this.record = new Schema({
      key: String,
      totalCount: Number,
      createdAt: String
    });



    return this.record;
  }


}

export default TestDataSchema;