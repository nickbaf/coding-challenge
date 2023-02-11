import axios from 'axios';
// const axios = require("axios").default;


export async function getAllReports() {
    console.log(await axios.get('http://localhost:8080/reports'))
    return await axios.get('http://localhost:8080/reports')
}


// const ReportService = {
//     async getAllReports() {
//         console.log(await axios.get('http://localhost:8080/reports'))
//         return await axios.get('http://localhost:8080/reports')
//     },
//     async updateReportStatus(reportId) {
//         return await axios.put(`http://localhost:8080/reports/${reportId}`)
//     },
//     async getReportById(reportId) {
//         return await axios.get(`http://localhost:8080/reports/${reportId}`)
//     }
// }

// module.exports = ReportService;
