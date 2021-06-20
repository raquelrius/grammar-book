const mongoose = require('mongoose');
const config = require('./config');

const connect = () => {
    return mongoose.connect(config.mongoUrl(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    });
}

const disconnect = async () => mongoose.disconnect();
module.exports = {
    connect,
    disconnect,
};

