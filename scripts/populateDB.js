// populate the database with fixtures/reports.json

const mongoose = require('mongoose');
const Report = require('../packages/server/src/models/report.js');
const reports = require('../fixtures/reports.json');

// mongoose.set('strictQuery', false);
async function populate(){
    await mongoose.connect('mongodb://127.0.0.1:27017/reports');

    reports['elements'].forEach(report => {
        Report.create(report).catch(err => console.log(err));
        console.log('Report created');
    });

}


populate().then(() => {
    console.log('Database populated');
    process.exit(0);
}).catch(err => {
    console.log(err);
    process.exit(1);
});
// Report.insertMany(reports['elements']).catch(err => console.log(err));
