document.addEventListener("DOMContentLoaded", function () {
    // Form and Resume elements
    var form = document.getElementById("resume-form");
    var resumeDisplay = document.getElementById("resume-display");
    var shareableLink = document.getElementById("shareable-link");
    var copyLinkBtn = document.getElementById("copy-link-btn");
    var downloadBtn = document.getElementById("download-btn");
    if (!form || !resumeDisplay || !shareableLink || !copyLinkBtn || !downloadBtn) {
        throw new Error("Required HTML elements are missing.");
    }
    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Collect user input data
        var formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            education: document.getElementById("education").value,
            skills: document.getElementById("skills").value,
            workExperience: document.getElementById("work-experience").value,
        };
        // Generate the resume dynamically
        generateResume(formData);
        // Generate the unique URL
        var userName = "".concat(formData.firstName.toLowerCase(), "-").concat(formData.lastName.toLowerCase());
        var uniqueUrl = "resume-viewer.html?username=".concat(encodeURIComponent(userName));
        localStorage.setItem(userName, JSON.stringify(formData)); // Save data
        // Update the shareable link
        shareableLink.href = uniqueUrl;
        shareableLink.textContent = "Open Resume: ".concat(uniqueUrl);
        shareableLink.style.display = "inline"; // Make the link visible
        // Enable "Copy Link" button
        copyLinkBtn.style.display = "inline-block";
        copyLinkBtn.addEventListener("click", function () {
            copyToClipboard(uniqueUrl);
            alert("Link copied to clipboard!");
        });
    });
    // Function to generate and display the resume (non-editable)
    function generateResume(data) {
        if (!resumeDisplay)
            return;
        resumeDisplay.innerHTML = "\n            <h3>".concat(data.firstName, " ").concat(data.lastName, "</h3>\n            <p>Email: ").concat(data.email, "</p>\n            <p>Contact No: ").concat(data.phone, "</p>\n            <h4>Education</h4>\n            <p>").concat(data.education, "</p>\n            <h4>Skills</h4>\n            <p>").concat(data.skills, "</p>\n            <h4>Work Experience</h4>\n            <p>").concat(data.workExperience, "</p>\n        ");
    }
    // Function to copy link to clipboard
    function copyToClipboard(text) {
        var tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = text;
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }
    // Download resume as PDF
    downloadBtn.addEventListener("click", function () {
        if (!resumeDisplay)
            return;
        var opt = {
            margin: 1,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(resumeDisplay).set(opt).save().catch(function (error) {
            console.error("Error generating PDF:", error);
        });
    });
});
