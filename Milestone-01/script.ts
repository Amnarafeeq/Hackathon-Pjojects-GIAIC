const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement ;
const skillsSection = document.getElementById('skills') as HTMLElement;

if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
}



const showMoreButton = document.getElementById('show-more-button') as HTMLButtonElement;

if (showMoreButton) {
    showMoreButton.addEventListener('click', () => {
        const hiddenProjects = document.querySelectorAll('.hidden-project') as NodeListOf<HTMLElement>;
        const isHidden = hiddenProjects[0].style.display === 'none';

        hiddenProjects.forEach(project => {
            project.style.display = isHidden ? 'list-item' : 'none';
        });

        showMoreButton.textContent = isHidden ? 'Show Less' : 'Show More';
    });
}

