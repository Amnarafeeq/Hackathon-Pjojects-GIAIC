declare const html2pdf: any;

document.addEventListener("DOMContentLoaded", () => {
    // Form and Resume elements
    const form = document.getElementById("resume-form") as HTMLFormElement | null;
    const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement | null;
    const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement | null;
    const copyLinkBtn = document.getElementById("copy-link-btn") as HTMLButtonElement | null;
    const downloadBtn = document.getElementById("download-btn") as HTMLButtonElement | null;

    if (!form || !resumeDisplay || !shareableLink || !copyLinkBtn || !downloadBtn) {
        throw new Error("Required HTML elements are missing.");
    }

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect user input data
        const formData = {
            firstName: (document.getElementById("first-name") as HTMLInputElement).value,
            lastName: (document.getElementById("last-name") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            phone: (document.getElementById("phone") as HTMLInputElement).value,
            education: (document.getElementById("education") as HTMLTextAreaElement).value,
            skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
            workExperience: (document.getElementById("work-experience") as HTMLTextAreaElement).value,
        };

        // Generate the resume dynamically
        generateResume(formData);

        // Generate the unique URL
        const userName = `${formData.firstName.toLowerCase()}-${formData.lastName.toLowerCase()}`;
        const uniqueUrl = `resume-viewer.html?username=${encodeURIComponent(userName)}`;
        localStorage.setItem(userName, JSON.stringify(formData)); // Save data

        // Update the shareable link
        shareableLink.href = uniqueUrl;
        shareableLink.textContent = `Open Resume: ${uniqueUrl}`;
        shareableLink.style.display = "inline"; // Make the link visible

        // Enable "Copy Link" button
        copyLinkBtn.style.display = "inline-block";
        copyLinkBtn.addEventListener("click", function () {
            copyToClipboard(uniqueUrl);
            alert("Link copied to clipboard!");
        });
    });

    // Function to generate and display the resume (non-editable)
    function generateResume(data: any) {
        if (!resumeDisplay) return;

        resumeDisplay.innerHTML = `
            <h3>${data.firstName} ${data.lastName}</h3>
            <p>Email: ${data.email}</p>
            <p>Contact No: ${data.phone}</p>
            <h4>Education</h4>
            <p>${data.education}</p>
            <h4>Skills</h4>
            <p>${data.skills}</p>
            <h4>Work Experience</h4>
            <p>${data.workExperience}</p>
        `;
    }

    // Function to copy link to clipboard
    function copyToClipboard(text: string) {
        const tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = text;
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    // Download resume as PDF
    downloadBtn.addEventListener("click", function () {
        if (!resumeDisplay) return;

        const opt = {
            margin: 1,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        (html2pdf as any)().from(resumeDisplay).set(opt).save().catch((error: any) => {
            console.error("Error generating PDF:", error);
        });
    });
});
