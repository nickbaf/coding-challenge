import axios from 'axios';
// const axios = require("axios").default;


export async function getAllReports() {
    return await axios.get('http://localhost:8080/reports')
}

export async function resolveReport(reportId) {
    return await axios.put(`http://localhost:8080/reports/${reportId}`)
}
