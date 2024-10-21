"use strict";
const skillsSection = document.getElementById('skills');
const toggleButton = document.getElementById("skills-toggle");
if (toggleButton && skillsSection) {
    toggleButton.addEventListener("click", () => {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    });
}
