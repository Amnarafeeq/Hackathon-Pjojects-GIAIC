const skillsSection = document.getElementById('skills') as HTMLElement ;
const toggleButton = document.getElementById("skills-toggle") as HTMLButtonElement;

if (toggleButton && skillsSection) {
    toggleButton.addEventListener("click", () => {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        } else {
            skillsSection.style.display = "none";
        }
    });
}