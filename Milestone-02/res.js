var resumeForm = document.getElementById('resume-builder-form');
var generatedResume = document.getElementById('generated-resume');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collecting form data
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var workExperience = document.getElementById('work-experience').value;
    // Resume HTML structure
    var resumeHTML = "\n        <div class=\"resume-container\">\n            <h2 class=\"resume-title\">Resume</h2>\n            <div class=\"resume-section\">\n                <h3>Personal Information</h3>\n                <p><strong>First Name:</strong> ".concat(firstName, "</p>\n                <p><strong>Last Name:</strong> ").concat(lastName, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Contact No:</strong> ").concat(phone, "</p>\n            </div>\n            <div class=\"resume-section\">\n                <h3>Education</h3>\n                <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n            </div>\n            <div class=\"resume-section\">\n                <h3>Skills</h3>\n                <p>").concat(skills.replace(/\n/g, '<br>'), "</p>\n            </div>\n            <div class=\"resume-section\">\n                <h3>Work Experience</h3>\n                <p>").concat(workExperience.replace(/\n/g, '<br>'), "</p>\n            </div>\n        </div>\n    ");
    // Display the generated resume
    generatedResume.innerHTML = resumeHTML;
});
