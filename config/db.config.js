mongoose = require('mongoose')

const mongoUri = 'mongodb+srv://boream:boream@boream-z9ztt.mongodb.net/films?retryWrites=true&w=majority';

exports.connect = async () => {
    console.log('Conecting Mongo DB')
    mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true }).
        catch(error => console.log(error));
}

