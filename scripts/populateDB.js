// populate the database with fixtures/reports.json

const mongoose = require('mongoose');
const Report = require('../packages/server/src/models/report.js');
const reports = require('../fixtures/reports.json');

async function populate(){
    await mongoose.connect('mongodb://localhost:27017/reports', { useNewUrlParser: true, useUnifiedTopology: true });

    await Report.insertMany(reports['elements']).then(() => {
        console.log('Reports inserted');
    }
    ).catch(err => {
        console.log(err);
    });
}

populate().then(() => {
    console.log('Database populated');
    process.exit(0);
}).catch(err => {
    console.log(err);
    process.exit(1);
});