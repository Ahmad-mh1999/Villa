import './DealTable.css'

function DealTable({area, floor, rooms, parking, payment}) {
    return (
        <div className="info-deal-table">
            <ul>
                <li>Total Flat Space <span>{area} m2</span></li>
                <li>Floor number <span>{floor}</span></li>
                <li>Number of rooms <span>{rooms}</span></li>
                <li>Parking Available <span>{parking}</span></li>
                <li>Payment Process <span>{payment}</span></li>
            </ul>
        </div>
    )
}

export default DealTable