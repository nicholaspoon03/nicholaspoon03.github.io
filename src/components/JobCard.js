
function JobCard({ company, positionToDuration, location, tags, description }) {
    console.log(positionToDuration)

    return (
        <div className="card">
            <div className="centre-page-content column card-content">
                <div className="row preceding-icon">
                    <i class="bi bi-building-fill"></i>
                    <b className="subheading">{company}</b>
                </div>

                {Object.entries(positionToDuration).map (([position, duration]) => (
                    <div key={position} className="row">
                        <div className="row preceding-icon">
                            <i class="bi bi-briefcase-fill"></i>
                            <p className="job-position">{position}</p>
                            <p>|</p>
                        </div>
                        <div className="row preceding-icon">
                            <i className="bi bi-calendar-fill duration-icon"></i>
                            <p>{duration}</p>
                        </div>
                    </div>
                ))}
                {/* <p className="job-position">{position}</p> */}

                <div className="row preceding-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>{location}</p>
                </div>

                { tags === null ? "" :
                    <div className="row preceding-icon">
                        <i class="bi bi-tags"></i>
                        <p>{tags}</p>
                    </div>
                }

                {description()}
            </div>
        </div>
    )
}

export default JobCard;
