const Report = require('../models/report');


let ReportController = {

    async createReport(req, res) {
        const report = new Report(req.body);
        await report.save();
        res.send(report);
    },

    async getAllOpenReports(req, res) {
        const reports = await Report.find({state:"OPEN"});
        console.log(reports)
        res.send(reports);
    },

    async getReportById(req, res) {
        const report = await Report.findById(req.params.reportId);
        res.send(report);
    },

    async updateReportStatus(req, res) {
        const report = await Report.findById(req.params.reportId);
        report.state = 'CLOSED'
        await Report.updateOne({ _id: req.params.reportId }, report);
        res.send(report);
    },
}

module.exports = ReportController;