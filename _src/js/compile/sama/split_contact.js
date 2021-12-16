if(document.querySelector('.boost-form')){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectName = urlParams.get('project');

    if(projectName && projectName.length > 0){
        let observer = new MutationObserver(function (mutations, me) {
            let formField = document.querySelector("input[name*='project_name']");
            if (formField && formField.value == '') {
                formField.value = projectName;
                return;
            }
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }
}