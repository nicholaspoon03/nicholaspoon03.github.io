import PageScaffold from "../components/PageScaffold";

function Projects() {
    return (
        <PageScaffold pageName="Projects" pageContent={() => (
            <div className="page-layout">
                <h2>Work in progress...</h2>
            </div>
        ) } />
    )
}

export default Projects;