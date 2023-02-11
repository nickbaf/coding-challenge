// populate the database with fixtures/reports.json

const mongoose = require('mongoose');
const Report = require('../packages/server/src/models/report.js');
const reports = require('../fixtures/reports.json');

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
Report.insertMany(reports).catch(err => console.log(err));
