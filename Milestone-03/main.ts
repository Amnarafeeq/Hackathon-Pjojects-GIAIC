function addNewEdField(): void {
    // Create a new textarea element
    let newEdNode: HTMLTextAreaElement = document.createElement('textarea');
    newEdNode.classList.add('form-control', 'edField');
    newEdNode.setAttribute("rows", "3"); 
    newEdNode.style.marginTop = "20px";
    newEdNode.setAttribute("placeholder", "e.g., School Name, Degree");

    let ed = document.getElementById('ed');
    if (ed) {
        ed.appendChild(newEdNode); 
    } else {
        console.log("Element with id 'ed' not found");
    }
}

function addNewCourseField():void{
    let newCourseNode:HTMLTextAreaElement = document.createElement("textarea");
    newCourseNode.classList.add("form-control", "courseField")
    newCourseNode.setAttribute("rows","3")
    newCourseNode.style.marginTop = "20px"
    newCourseNode.setAttribute("placeholder","e.g., Web Development Bootcamp, Codecademy")

    let course:HTMLElement | null = document.getElementById("course")
   if(course){
    course.appendChild(newCourseNode)
   }else{
    console.log("Element with id 'course' not found");
   }
}

function addNewSkillField():void {
    let newSkillNode:HTMLTextAreaElement = document.createElement("textarea")
    newSkillNode.classList.add("form-control","skillField")
    newSkillNode.setAttribute("rows","2")
    newSkillNode.style.marginTop ="15px"
    newSkillNode.setAttribute("placeholder","e.g., JavaScript, React, Python, Project Management")

    let skill:HTMLElement | null = document.getElementById("skill")
    if(skill){
        skill.appendChild(newSkillNode)
    }else{
    console.log("Element with id 'skill' not found");
    }
}

function addNewExpField():void {
    let newExpNode:HTMLTextAreaElement = document.createElement("textarea")
    newExpNode.classList.add("form-control","expField")
    newExpNode.setAttribute("rows","3")
    newExpNode.style.marginTop ="20px"
    newExpNode.setAttribute("placeholder","Describe your role and achievements")

    let experience:HTMLElement | null = document.getElementById("exp")
    if(experience){
        experience.appendChild(newExpNode)
    }else{
    console.log("Element with id 'exp' not found");
    }
}

// generating resume
function genResume(event:Event){
   event.preventDefault()


    let nameField = (document.getElementById("nameField") as HTMLInputElement).value
    let nameResume = document.getElementById("userName")    
    if(nameResume){
        nameResume.innerHTML = nameField
    }

    (document.getElementById("user-phone") as HTMLElement).innerHTML = 
    `<i class="fas fa-phone"></i> ${(document.getElementById("contactField") as HTMLInputElement).value}`;
    (document.getElementById("user-address") as HTMLElement).innerHTML = 
    `<i class="fas fa-map-marker-alt"></i> ${(document.getElementById("addressField") as HTMLInputElement ).value}`;
    (document.getElementById("user-email") as HTMLElement).innerHTML = 
    `<i class="fa-solid fa-envelope"></i> ${(document.getElementById("emailField") as HTMLInputElement).value}`;
    (document.getElementById("user-linkedin") as HTMLElement).innerHTML = 
    `<i class="fa-brands fa-linkedin"></i> ${(document.getElementById("linkField") as HTMLInputElement).value}`;
    (document.getElementById("user-github") as HTMLElement).innerHTML = 
    `<i class="fa-brands fa-github"></i> ${(document.getElementById("gitField") as HTMLInputElement).value}`;

    (document.getElementById("user-profession") as HTMLElement).innerHTML = 
    (document.getElementById("professionField") as HTMLInputElement).value;
    (document.getElementById("user-profile") as HTMLElement).innerHTML = 
    (document.getElementById("proField") as HTMLInputElement).value;

    let edField = document.getElementsByClassName("edField")as HTMLCollectionOf<HTMLInputElement>;

    let eduStr = " "
    
    for(let edu of edField){
        eduStr = eduStr + `<li> ${edu.value} </li>`
    }
    (document.getElementById("user-edu") as HTMLElement).innerHTML = eduStr;

    
    let courseField = document.getElementsByClassName("courseField")as HTMLCollectionOf<HTMLInputElement>
let tchStr = " "
for(let tch of courseField){
    tchStr = tchStr + `<li> ${tch.value} </li>`
}
(document.getElementById("user-courses") as HTMLElement).innerHTML = tchStr


let skillField = document.getElementsByClassName("skillField") as HTMLCollectionOf<HTMLInputElement>
let skillStr = " "
for(let skill of skillField){
    skillStr = skillStr + `<li> ${skill.value} </li>`
}
(document.getElementById("user-skill") as HTMLElement).innerHTML = skillStr

let expField = document.getElementsByClassName("expField") as HTMLCollectionOf<HTMLInputElement>
let expStr = " "
for(let exp of expField){
    expStr = expStr + `<li> ${exp.value} </li>`
}
(document.getElementById("user-exp") as HTMLElement).innerHTML = expStr;

const fileInput = document.getElementById("imgField") as HTMLInputElement;
const file = fileInput.files?.[0];

if (file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    const result = reader.result as string;
    const imgElement = document.getElementById("user-img") as HTMLImageElement;
    imgElement.src = result;
  };
}



(document.getElementById("resume-input")as HTMLDivElement).style.display = "none";
(document.getElementById("resume-generated") as HTMLDivElement).style.display = "block"
}
const generateResume = document.getElementById("forms") as HTMLFormElement;
generateResume.addEventListener("submit",genResume);