import './style.css';

function TagButton({ text, selected, setFilter }) {
    return (
        <button className={`outlined-button ${selected ? "selected-tag" : ""}`} onClick={() => (setFilter(text))}>
            {text}
        </button>
    )
}

export default TagButton;
