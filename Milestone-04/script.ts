document.addEventListener("DOMContentLoaded", () => {
    // Asserting types for the form and resume display elements
    const form = document.getElementById("resume-form") as HTMLFormElement | null;
    const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement | null;

    if (form && resumeDisplay) {
        form.addEventListener("submit", (event: Event) => {
            event.preventDefault();

            // Collect input values with type assertions
            const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
            const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
            const email = (document.getElementById("email") as HTMLInputElement).value;
            const phone = (document.getElementById("phone") as HTMLInputElement).value;
            const education = (document.getElementById("education") as HTMLTextAreaElement).value;
            const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
            const workExperience = (document.getElementById("work-experience") as HTMLTextAreaElement).value;

            // Generate resume with edit buttons
            const resumeHTML = `
                <h1 " class="resume-title">Resume</h1>
                <section class="resume-section">
                    <h2 class="resume-section-title">Personal Information</h2>
                    <div class="resume-content">
                        <p><strong>First Name:</strong> ${firstName}</p>
                        <p><strong>Last Name:</strong> ${lastName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Contact No:</strong> ${phone}</p>
                    </div>
                    <button class="edit-btn">Edit</button>
                </section>
                <section class="resume-section">
                    <h2 class="resume-section-title">Education</h2>
                    <div class="resume-content">
                        <p>${education}</p>
                    </div>
                    <button class="edit-btn">Edit</button>
                </section>
                <section class="resume-section">
                    <h2 class="resume-section-title">Skills</h2>
                    <div class="resume-content">
                        <p>${skills}</p>
                    </div>
                    <button class="edit-btn">Edit</button>
                </section>
                <section class="resume-section">
                    <h2 class="resume-section-title">Work Experience</h2>
                    <div class="resume-content">
                        <p>${workExperience}</p>
                    </div>
                    <button class="edit-btn">Edit</button>
                </section>
            `;

            resumeDisplay.innerHTML = resumeHTML;

            // Add edit functionality with type assertions for buttons and sections
            resumeDisplay.querySelectorAll(".edit-btn").forEach(button => {
                const editButton = button as HTMLButtonElement;
                editButton.addEventListener("click", () => {
                    const section = editButton.previousElementSibling as HTMLDivElement;
                    const isEditing = section.classList.toggle("editing");

                    editButton.textContent = isEditing ? "Save" : "Edit";
                    section.contentEditable = isEditing ? "true" : "false";
                });
            });
        });
    }
});
