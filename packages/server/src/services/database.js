// mongodb
const mongoose = require('mongoose');



class DatabaseService {

    async connect() {
        this.db = await mongoose.connect('mongodb://localhost:27017/reports ', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
        mongoose.connection.once('open', function () {
            console.log('Connected to MongoDB');
        }
        );
        return mongoose
    }

}

module.exports = new DatabaseService()