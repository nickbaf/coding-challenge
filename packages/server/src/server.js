
// create express server

const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');


const ReportControler = require('./controller/report');
const DBService = require('./services/database');
const { resourceLimits } = require('worker_threads');
const db = DBService.connect();


app.use(express.json());

app.use(cors());



// Routes
app.get('/reports', ReportControler.getAllOpenReports);

app.post('/reports/:reportId', ReportControler.updateReportStatus);

app.put('/reports/:reportId', ReportControler.updateReportStatus);

