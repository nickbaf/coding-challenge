import './Report.css';

function Report(props){
    return(
        <div className="report">
            <span>
                <p>Id: {props.id}</p>
                <p>State: {props.state}</p>
            </span>
            <span>
                <p>Type: {props.reportType}</p>
                <p>Message: {props.message}</p>
            </span>
            <span>
                <button>Block</button>
                <button>Resolve</button>
            </span>
            <p>Details</p>
        </div>
    )
}

export default Report