import mongoose from 'mongoose';

class TestDaSchemas {
  constructor() {

  

  }

  get record(){

    var Schema = mongoose.Schema;

    var record = new Schema({
      key: String,
      ttoalCount : Number,
      createdAt: String
    });

    return record;
  }

  
}

export default TestDaSchemas;