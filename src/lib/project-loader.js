const getProjectURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get('project');
    console.log('Project URL param:', project);
    return project ? `https://tikpok.github.io/sym-scratch-gui/static/${project}` : null;
};

const loadProject = function (vm) {
    const projectURL = getProjectURL();
    if (!projectURL) return;

    return fetch(projectURL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => vm.loadProject(arrayBuffer))
        .catch(error => console.error('Failed to load project:', error));
};

export default loadProject;
