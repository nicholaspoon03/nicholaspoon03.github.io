import PageScaffold from '../../components/PageScaffold';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects.tsx';
import { useState } from 'react';

function Projects() {
    const [ filterPanelExpanded, setFilterPanelExpanded ] = useState(false);
    const [ activeFilters, setActiveFilters ] = useState(new Set());

    const onFilterClick = (newFilter) => {
        if (activeFilters.has(newFilter)) {
            const newSet = new Set(activeFilters);
            newSet.delete(newFilter);
            setActiveFilters(newSet);
        } else {
            setActiveFilters(new Set([...activeFilters, newFilter]))
        }
        setFilterPanelExpanded(true);
    }

    return (
        <PageScaffold pageName="Projects" pageContent={() => (
            <div className="page-layout">
                <div className="card-spacing">
                    {projects.map((p, index) => (
                        <ProjectCard
                            key={index}
                            projectName={p.name}
                            duration={p.duration}
                            tags={p.tags}
                            hyperlinks={p.hyperlinks}
                            description={p.description}
                            selectedTags={activeFilters}
                            setFilter={(newFilter) => (onFilterClick(newFilter))}
                        />
                    ))}
                </div>

                <h2>Work in progress...</h2>
            </div>
        )} />
    )
}

export default Projects;