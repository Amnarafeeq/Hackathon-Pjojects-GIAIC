var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
}
var showMoreButton = document.getElementById('show-more-button');
if (showMoreButton) {
    showMoreButton.addEventListener('click', function () {
        var hiddenProjects = document.querySelectorAll('.hidden-project');
        var isHidden = hiddenProjects[0].style.display === 'none';
        hiddenProjects.forEach(function (project) {
            project.style.display = isHidden ? 'list-item' : 'none';
        });
        showMoreButton.textContent = isHidden ? 'Show Less' : 'Show More';
    });
}
