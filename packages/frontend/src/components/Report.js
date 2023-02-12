import './Report.css';
import { resolveReport } from '../api/reports';
import { useState } from "react";
function Report(props){
    

    async function block(id){
       await resolveReport(id);
       window.location.reload(false);
    }

    async function resolve(id){
        await resolveReport(id);
        window.location.reload(false);
    }



    return(
        <div className="report">
            <div className='info'>
            <div className='block' >
                <p>Id: {props.id}</p>
                <p>State: {props.state}</p>
            </div>
            <div className='block'>
                <p>Type: {props.reportType}</p>
                <p>Message: {props.message}</p>
            </div>
            <div className='actions'>
                <button onClick={() => block(props.id)}>Block</button>
                <button onClick={() => resolve(props.id)}>Resolve</button>
            </div>
            </div>
            <p className='details'>Details</p>
        </div>
    )
}

export default Report