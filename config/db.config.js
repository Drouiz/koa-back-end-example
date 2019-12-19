mongoose = require('mongoose')

const mongoUri = '';

exports.connect = async () => {
    console.log('Conecting Mongo DB')
    mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true }).
        catch(error => console.log(error));
}

