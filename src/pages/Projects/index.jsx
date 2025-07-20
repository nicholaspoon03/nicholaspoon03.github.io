import FilterPanel from '../../components/FilterPanel/index.jsx';
import PageScaffold from '../../components/PageScaffold';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects.tsx';
import { useEffect, useState } from 'react';

function Projects() {
    const [ filterPanelExpanded, setFilterPanelExpanded ] = useState(false);
    const [ activeFilters, setActiveFilters ] = useState(new Set());
    const [ filterList, setFilterList ] = useState(new Set());
    const [ filteredProjects, setFilteredProjects ] = useState(projects);

    useEffect((() => {
        if (activeFilters.size !== 0) {
            setFilteredProjects(
                projects.filter((p) => (
                    p.tags.some((tag) => (
                        activeFilters.has(tag)
                    ))
                ))
            )
        } else {
            setFilteredProjects(projects);
        }
    }), [ activeFilters ]);

    useEffect((() => {
        setFilterList(
            new Set(
                projects.map((p) => (p.tags)).flat()
            )
        )
    }), []);

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

                <FilterPanel
                    expanded={filterPanelExpanded}
                    activeFilters={activeFilters}
                    filterList={filterList}
                    onFilterClick={(newFilter) => (onFilterClick(newFilter))}
                    onDropdownClick={() => (setFilterPanelExpanded(!filterPanelExpanded))}
                    onClearClick={() => (setActiveFilters(new Set()))}
                />

                <div className="card-spacing">
                    {filteredProjects.map((p, index) => (
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
            </div>
        )} />
    )
}

export default Projects;