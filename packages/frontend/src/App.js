import logo from './logo.svg';
import './App.css';
import Report from './components/Report'
import { getAllReports } from './api/reports'
import { useEffect, useState } from "react";

function App() {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function getReports() {
      const reports = await getAllReports();
      setReports(Object.values(reports.data));
    }

    getReports();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Reports
      </header>
      <div className="reportContainer">
        {reports.map((report) => {
          return <Report
            id={report._id} state={report.state}
            reportType={report.payload.reportType} message={report.payload.message}></Report>;
        })}
      </div>
    </div>
  );
}

export default App;
