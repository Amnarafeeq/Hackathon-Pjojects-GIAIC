document.addEventListener("DOMContentLoaded", function () {
    // Asserting types for the form and resume display elements
    var form = document.getElementById("resume-form");
    var resumeDisplay = document.getElementById("resume-display");
    if (form && resumeDisplay) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            // Collect input values with type assertions
            var firstName = document.getElementById("first-name").value;
            var lastName = document.getElementById("last-name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var education = document.getElementById("education").value;
            var skills = document.getElementById("skills").value;
            var workExperience = document.getElementById("work-experience").value;
            // Generate resume with edit buttons
            var resumeHTML = "\n                <h1 \" class=\"resume-title\">Resume</h1>\n                <section class=\"resume-section\">\n                    <h2 class=\"resume-section-title\">Personal Information</h2>\n                    <div class=\"resume-content\">\n                        <p><strong>First Name:</strong> ".concat(firstName, "</p>\n                        <p><strong>Last Name:</strong> ").concat(lastName, "</p>\n                        <p><strong>Email:</strong> ").concat(email, "</p>\n                        <p><strong>Contact No:</strong> ").concat(phone, "</p>\n                    </div>\n                    <button class=\"edit-btn\">Edit</button>\n                </section>\n                <section class=\"resume-section\">\n                    <h2 class=\"resume-section-title\">Education</h2>\n                    <div class=\"resume-content\">\n                        <p>").concat(education, "</p>\n                    </div>\n                    <button class=\"edit-btn\">Edit</button>\n                </section>\n                <section class=\"resume-section\">\n                    <h2 class=\"resume-section-title\">Skills</h2>\n                    <div class=\"resume-content\">\n                        <p>").concat(skills, "</p>\n                    </div>\n                    <button class=\"edit-btn\">Edit</button>\n                </section>\n                <section class=\"resume-section\">\n                    <h2 class=\"resume-section-title\">Work Experience</h2>\n                    <div class=\"resume-content\">\n                        <p>").concat(workExperience, "</p>\n                    </div>\n                    <button class=\"edit-btn\">Edit</button>\n                </section>\n            ");
            resumeDisplay.innerHTML = resumeHTML;
            // Add edit functionality with type assertions for buttons and sections
            resumeDisplay.querySelectorAll(".edit-btn").forEach(function (button) {
                var editButton = button;
                editButton.addEventListener("click", function () {
                    var section = editButton.previousElementSibling;
                    var isEditing = section.classList.toggle("editing");
                    editButton.textContent = isEditing ? "Save" : "Edit";
                    section.contentEditable = isEditing ? "true" : "false";
                });
            });
        });
    }
});
