const express = require('express');
const app = express();
const cors = require('cors');


const ReportControler = require('./controller/report');
const DBService = require('./services/database');
const db = DBService.connect();


app.use(express.json());

app.use(cors());



// Routes
app.get('/reports', ReportControler.getAllOpenReports);

app.post('/reports/:reportId', ReportControler.updateReportStatus);

app.put('/reports/:reportId', ReportControler.updateReportStatus);

app.listen('8080')
