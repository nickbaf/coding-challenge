const Report = require('../models/report');


let ReportController = {

    async createReport(req, res) {
        const report = new Report(req.body);
        await report.save();
        res.send(report);
    },

    async getAllOpenReports(req, res) {
        const reports = await Report.find({state:"OPEN"}); 
        res.send(reports);
    },

    async getReportById(req, res) {
        const report = await Report.find(req.params.reportId);
        res.send(report);
    },

    async updateReportStatus(req, res) {       
        await Report.findOneAndUpdate({ _id: req.params.reportId }, {state: 'CLOSED'});
        res.sendStatus(200);
    },
}

module.exports = ReportController;