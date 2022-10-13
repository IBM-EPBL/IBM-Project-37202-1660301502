
export default function StatCard({ bgColor, title, value, icon }) {
    return (
        <div className="col-lg-2 col-md-3 col-5 col-sm-4 stat-card mx-1 my-3 my-md-3 my-xs-3" style={{ backgroundColor: bgColor }}>
            <div className="stat-card-icon">
                <img src={icon} width="30px" alt={title} />
            </div>
            <div className="col mx-3"><h6>{title}</h6>
                <h3>{value}</h3></div>
        </div>
    )
}

