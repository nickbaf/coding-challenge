import logo from './logo.svg';
import './App.css';
import Report from './components/Report'
import { getAllReports } from './api/reports'
import { useEffect, useState } from "react";
import { resolveReport, blockReport } from './api/reports';

function App() {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, []);


  async function block(id) {
    const response = await blockReport(id);
    if (response.status === 202) {
      console.log('Report blocked')
    } else {
      alert('Error blocking report');
    }
    getReports();
  }

  async function getReports() {
    const reports = await getAllReports();
    if (reports.status === 200) {
      setReports(Object.values(reports.data));
    } else {
      alert('Error getting reports');
    }

  }

  async function resolve(id) {
    const response = await resolveReport(id);
    if (response.status === 202) {
      console.log('Report resolved')
    } else {
      alert('Error blocking report');
    }
    getReports();
  }




  return (
    <div className="App">
      <header className="App-header">
        Spam Reports
      </header>
      <div className="reportContainer">
        {reports.map((report) => {
          return <Report
            id={report._id} state={report.state}
            reportType={report.payload.reportType} message={report.payload.message}
            blockFunc={block} resolveFunc={resolve} >
          </Report>;
        })}
      </div>
    </div>
  );
}

export default App;
