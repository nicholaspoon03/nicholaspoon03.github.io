import './style.css';

function IconText({ iconClassName, textContent, className="" }) {
    return (
        <div className={`row preceding-icon icon-text ${className}`}>
            <i className={iconClassName}></i>
            {textContent()}
        </div>
    )
}

export default IconText;
