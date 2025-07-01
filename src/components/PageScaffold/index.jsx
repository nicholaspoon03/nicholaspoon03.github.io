import './style.css';

function PageScaffold({ pageName, pageContent }) {
    return (
        <div className="column">
            <div id="page-scaffold-top-padding" />

            <h1 id="page-name" className="centre-page-content">{pageName}</h1>

            <div id="page-name-page-content-padding" />

            {pageContent()}
        </div>
    )
}

export default PageScaffold;
