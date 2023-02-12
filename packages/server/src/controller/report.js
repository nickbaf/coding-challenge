const Report = require('../models/report');


let ReportController = {

    async createReport(req, res) {
        const report = new Report(req.body);
        await report.save();
        res.status(200).end();
    },

    async getAllOpenReports(req, res) {
        await Report.find({ state: "OPEN" }).then((reports) => {
            res.status(200).json(reports).end();
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err).end();
        }
        );
    },

    async resolveReport(req, res) {
        
        await Report.findOneAndUpdate({ _id: req.params.reportId }, { state: req.body.ticketState }).then(() => {
            res.status(202).end();
        }).catch((err) => {
            console.log(err);
            res.status(500).end();
        })
    },

    async blockReport(req, res) {
        // Make a request to an internal API to block the content from the social network and if sucesfull
        // run the folowing code to update the database
        await Report.findOneAndUpdate({ _id: req.params.reportId }, { state: req.body.ticketState }).then(() => {
            res.status(202).end();
        }).catch((err) => {
            console.log(err);
            res.status(500).end();
        })
    },
}

module.exports = ReportController;