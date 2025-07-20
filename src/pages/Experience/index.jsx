import { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard';
import PageScaffold from '../../components/PageScaffold';
import { otherExperiences } from '../../data/otherExperiences.tsx';
import { professionalExperiences } from '../../data/professionalExperiences.tsx';
import FilterPanel from '../../components/FilterPanel/index.jsx';

function Experience() {
    const [ filterPanelExpanded, setFilterPanelExpanded ] = useState(false);
    const [ activeFilters, setActiveFilters ] = useState(new Set());
    const [ filterList, setFilterList ] = useState(new Set());
    const [ filteredProfessionalExperience, setFilteredProfessionalExperience ] = useState(professionalExperiences);
    const [ filteredOtherExperience, setFilteredOtherExperience ] = useState(otherExperiences);

    useEffect((() => {
        if (activeFilters.size !== 0) {
            setFilteredProfessionalExperience(
                professionalExperiences.filter((exp) => (
                    exp.tags.some((tag) => (
                        activeFilters.has(tag)
                    ))
                ))
            )
    
            setFilteredOtherExperience(
                otherExperiences.filter((exp) => (
                    exp.tags.some((tag) => (
                        activeFilters.has(tag)
                    ))
                ))
            )
        } else {
            setFilteredProfessionalExperience(professionalExperiences);
            setFilteredOtherExperience(otherExperiences);
        }
    }), [ activeFilters ]);

    useEffect((() => {
        setFilterList(
            professionalExperiences.concat(otherExperiences).map((exp) => (
                exp.tags
            )).flat()
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
        <PageScaffold pageName="Experience" pageContent={() => (
            <div className="page-layout">

                <FilterPanel
                    expanded={filterPanelExpanded}
                    activeFilters={activeFilters}
                    filterList={filterList}
                    onFilterClick={(newFilter) => (onFilterClick(newFilter))}
                    onDropdownClick={() => (setFilterPanelExpanded(!filterPanelExpanded))}
                />

                {filteredProfessionalExperience.length === 0 ? "" : 
                    <h2>Professional Experience</h2>
                }

                <div className="card-spacing">
                    {filteredProfessionalExperience.map((exp, index) => (
                        <JobCard
                            key={index}
                            company={exp.company}
                            positionToDuration={exp.positionToDuration}
                            location={exp.location}
                            tags={exp.tags}
                            description={exp.description}
                            selectedTags={activeFilters}
                            setFilter={(newFilter) => (onFilterClick(newFilter))}
                        />
                    ))}
                </div>

                {filteredOtherExperience.length === 0 ? "" :
                    <h2>Other Experience</h2>
                }

                <div className="card-spacing">
                    {filteredOtherExperience.map((exp, index) => (
                        <JobCard
                            key={index}
                            company={exp.company}
                            positionToDuration={exp.positionToDuration}
                            location={exp.location}
                            tags={exp.tags}
                            description={exp.description}
                            selectedTags={activeFilters}
                            setFilter={(newFilter) => (onFilterClick(newFilter))}
                        />
                    ))}
                </div>
            </div>
        )} />
    )
}

export default Experience;
