import './style.css';

function Card({ cardContent }) {
    return (
        <div className="card">
            <div className="centre-page-content column card-content">
                {cardContent()}
            </div>
        </div>
    )
}

export default Card;
