// script.ts

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form") as HTMLFormElement;
    const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;
  
    if (form && resumeDisplay) {
      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
  
        // Collect form values
        const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
        const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById("work-experience") as HTMLTextAreaElement).value;
  
        // Generate resume HTML with correct classes for styling
        const resumeHTML = `
          <h1 class="resume-section-title">Resume</h1>
          <section class="resume-section">
            <h2 class="resume-section-title">Personal Information</h2>
            <div class="resume-content resume-info">
              <p class="resume-info-item"><span>First Name:</span> ${firstName}</p>
              <p class="resume-info-item"><span>Last Name:</span> ${lastName}</p>
              <p class="resume-info-item"><span>Email:</span> ${email}</p>
              <p class="resume-info-item"><span>Contact No:</span> ${phone}</p>
            </div>
          </section>
          <section class="resume-section">
            <h2 class="resume-section-title">Education</h2>
            <div class="resume-content">
              <p>${education}</p>
            </div>
          </section>
          <section class="resume-section">
            <h2 class="resume-section-title">Skills</h2>
            <div class="resume-content resume-skills">
              <ul>
                ${skills
                  .split(',')
                  .map(skill => `<li>${skill.trim()}</li>`)
                  .join('')}
              </ul>
            </div>
          </section>
          <section class="resume-section">
            <h2 class="resume-section-title">Work Experience</h2>
            <div class="resume-content">
              <p>${workExperience}</p>
            </div>
          </section>
        `;
  
        // Display the resume
        resumeDisplay.innerHTML = resumeHTML;
      });
    } else {
      console.error("Form or resume display element not found.");
    }
  });
  