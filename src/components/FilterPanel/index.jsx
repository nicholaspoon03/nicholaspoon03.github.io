import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import "./style.css";

function FilterPanel({ expanded, activeFilters, filterList, onFilterClick, onDropdownClick, onClearClick }) {
    return (
        <div id="filter-panel-div">
            <div className="page-layout">
                <div id="filter-panel-controls" className="row">
                    <button className="outlined-button row chevron" onClick={onDropdownClick}>
                        <p>Filter</p>
                        { expanded ? <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i> }
                    </button>

                    { expanded ?
                        <button className="outlined-button" onClick={onClearClick}>
                            <p>Clear</p>
                        </button>
                        : ""
                    }
                </div>
            </div>

            { expanded ? 
                <div id="filter-box">
                    <FormGroup id="filter-box-grid">
                        {Array.from(filterList).sort().map((filter, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={activeFilters.has(filter)}
                                        sx={{
                                            color: "#BEC7D5",
                                            "&.Mui-checked": {
                                                color: "#00D646",
                                            },
                                        }}
                                        onChange={() => (onFilterClick(filter))}
                                    />
                                }
                                label={filter}
                            />
                        ))}
                    </FormGroup>
                </div>
                : ""
            }
        </div>
    )
}

export default FilterPanel;
