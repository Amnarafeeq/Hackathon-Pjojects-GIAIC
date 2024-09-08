// const resumeForm = document.getElementById('resume-builder-form') as HTMLFormElement;
// const generatedResume = document.getElementById('generated-resume') as HTMLDivElement;

// resumeForm.addEventListener('submit', (event: Event) => {
//     event.preventDefault();

//     // Collecting form data
//     const firstName = (document.getElementById('first-name') as HTMLInputElement).value;
//     const lastName = (document.getElementById('last-name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
//     const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;

//     // Resume HTML structure
//     const resumeHTML = `
//         <div class="resume-container">
//             <h2 class="resume-title">Resume</h2>
//             <div class="resume-section">
//                 <h3>Personal Information</h3>
//                 <p><strong>First Name:</strong> ${firstName}</p>
//                 <p><strong>Last Name:</strong> ${lastName}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Contact No:</strong> ${phone}</p>
//             </div>
//             <div class="resume-section">
//                 <h3>Education</h3>
//                 <p>${education.replace(/\n/g, '<br>')}</p>
//             </div>
//             <div class="resume-section">
//                 <h3>Skills</h3>
//                 <p>${skills.replace(/\n/g, '<br>')}</p>
//             </div>
//             <div class="resume-section">
//                 <h3>Work Experience</h3>
//                 <p>${workExperience.replace(/\n/g, '<br>')}</p>
//             </div>
//         </div>
//     `;

//     // Display the generated resume
//     generatedResume.innerHTML = resumeHTML;
// });
