const express = require('express');
const app = express();
const cors = require('cors');


const ReportControler = require('./controller/report');
const DBService = require('./services/database');
DBService.connect();


app.use(express.json());

app.use(cors());



// Routes
app.get('/reports', ReportControler.getAllOpenReports);

app.post('/reports/:reportId', ReportControler.blockReport);

app.put('/reports/:reportId', ReportControler.resolveReport);

// Start the server
app.listen('8080')

console.log('Server running on port 8080');
