const getProjectURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get('project');
    return project ? `https://USERNAME.github.io/my-scratch-gui/static/${project}` : null;
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
