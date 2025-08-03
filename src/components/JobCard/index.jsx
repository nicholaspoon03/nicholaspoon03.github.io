import Card from '../Card';
import IconText from '../IconText';
import TagButton from '../TagButton';
import './style.css';

function JobCard({ company, positionToDuration, location, tags, description, selectedTags, setFilter }) {
    return (
        <Card cardContent={() => (
            <div>
                <IconText
                    iconClassName="bi bi-building-fill"
                    textContent={() => (
                        <b className="subheading">{company}</b>
                    )}
                />

                {Object.entries(positionToDuration).map(([position, duration]) => (
                    <div key={position} className="row position-duration-div">
                        <IconText
                            iconClassName="bi bi-briefcase-fill"
                            textContent={() => (
                                <div className="row">
                                    <p className="job-position">{position}</p>
                                    <p>|</p>
                                </div>
                            )}
                        />

                        <IconText
                            iconClassName="bi bi-calendar-fill experience-duration-icon"
                            textContent={() => (
                                <p>{duration}</p>
                            )}
                        />
                    </div>
                ))}

                <IconText
                    iconClassName="bi bi-geo-alt-fill"
                    textContent={() => (
                        <p>{location}</p>
                    )}
                />

                { tags.length === 0 ? "" :
                    <IconText
                        iconClassName="bi bi-tags-fill"
                        textContent={() => (
                            tags.map((tag, index) => (
                                <TagButton
                                    key={index}
                                    text={tag}
                                    selected={selectedTags.has(tag)}
                                    setFilter={setFilter}
                                />
                            ))
                        )}
                    />
                }

                {description}
            </div>
        )} />
    )
}

export default JobCard;
