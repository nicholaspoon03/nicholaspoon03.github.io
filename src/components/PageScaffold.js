
function PageScaffold({ pageName, pageContent }) {
    return (
        <div className="column">
            <div style={{ height: '150px' }} />

            <h1 id="page-name" className="centre-page-content">{pageName}</h1>

            <div style={{ height: '80px' }} />

            {pageContent()}
        </div>
    )
}

export default PageScaffold;
