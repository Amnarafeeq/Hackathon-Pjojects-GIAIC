// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var resumeDisplay = document.getElementById("resume-display");
    if (form && resumeDisplay) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission
            // Collect form values
            var firstName = document.getElementById("first-name").value;
            var lastName = document.getElementById("last-name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var education = document.getElementById("education").value;
            var skills = document.getElementById("skills").value;
            var workExperience = document.getElementById("work-experience").value;
            // Generate resume HTML with correct classes for styling
            var resumeHTML = "\n          <h1 class=\"resume-section-title\">Resume</h1>\n          <section class=\"resume-section\">\n            <h2 class=\"resume-section-title\">Personal Information</h2>\n            <div class=\"resume-content resume-info\">\n              <p class=\"resume-info-item\"><span>First Name:</span> ".concat(firstName, "</p>\n              <p class=\"resume-info-item\"><span>Last Name:</span> ").concat(lastName, "</p>\n              <p class=\"resume-info-item\"><span>Email:</span> ").concat(email, "</p>\n              <p class=\"resume-info-item\"><span>Contact No:</span> ").concat(phone, "</p>\n            </div>\n          </section>\n          <section class=\"resume-section\">\n            <h2 class=\"resume-section-title\">Education</h2>\n            <div class=\"resume-content\">\n              <p>").concat(education, "</p>\n            </div>\n          </section>\n          <section class=\"resume-section\">\n            <h2 class=\"resume-section-title\">Skills</h2>\n            <div class=\"resume-content resume-skills\">\n              <ul>\n                ").concat(skills
                .split(',')
                .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
                .join(''), "\n              </ul>\n            </div>\n          </section>\n          <section class=\"resume-section\">\n            <h2 class=\"resume-section-title\">Work Experience</h2>\n            <div class=\"resume-content\">\n              <p>").concat(workExperience, "</p>\n            </div>\n          </section>\n        ");
            // Display the resume
            resumeDisplay.innerHTML = resumeHTML;
        });
    }
    else {
        console.error("Form or resume display element not found.");
    }
});
