import axios from 'axios';


export async function getAllReports() {
    return await axios.get('http://localhost:8080/reports')
}

export async function resolveReport(reportId) {
    return await axios.put(`http://localhost:8080/reports/${reportId}`, { ticketState: 'CLOSED' })
}


export async function blockReport(reportId) {
    return await axios.post(`http://localhost:8080/reports/${reportId}`, { ticketState: 'BLOCKED' })
}
