import Card from "../Card";
import IconText from "../IconText";
import TagButton from "../TagButton";
import './style.css';

function ProjectCard({ projectName, duration, tags, hyperlinks, description, selectedTags, setFilter }) {
    return (
        <Card cardContent={() => (
            <div>
                <IconText
                    iconClassName="bi bi-easel3-fill"
                    textContent={() => (
                        <b className="subheading">{projectName}</b>
                    )}
                />

                <IconText
                    iconClassName="bi bi-calendar-fill"
                    textContent={() => (
                        <p>{duration}</p>
                    )}
                />

                { hyperlinks.length === 0 ? "" :
                    hyperlinks.map((hyperlink) => (
                        <IconText
                            key={hyperlink.link}
                            iconClassName="bi bi-link-45deg"
                            textContent={() => (
                                <a id="project-link" href={hyperlink.link} target="_blank" rel="noreferrer noopener">
                                    <p>{hyperlink.text}</p>
                                </a>
                            )}
                        />
                    ))
                }

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

export default ProjectCard;
