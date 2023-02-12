import './Report.css';


function Report(props) {

    return (
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
                    <button onClick={() => props.blockFunc(props.id)}>Block</button>
                    <button onClick={() => props.resolveFunc(props.id)}>Resolve</button>
                </div>
            </div>
            <p className='details'>Details</p>
        </div>
    )
}

export default Report