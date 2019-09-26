import mongoose from 'mongoose';

class MongooseConnectionConfig{

    constructor(){

        mongoose.connect('mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study', {useNewUrlParser: true, useUnifiedTopology: true }).catch(error => console.log(error));
    }
}

export default MongooseConnectionConfig;

