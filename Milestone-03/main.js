function addNewEdField() {
    // Create a new textarea element
    var newEdNode = document.createElement('textarea');
    newEdNode.classList.add('form-control', 'edField');
    newEdNode.setAttribute("rows", "3");
    newEdNode.style.marginTop = "20px";
    newEdNode.setAttribute("placeholder", "e.g., School Name, Degree");
    var ed = document.getElementById('ed');
    if (ed) {
        ed.appendChild(newEdNode);
    }
    else {
        console.log("Element with id 'ed' not found");
    }
}
function addNewCourseField() {
    var newCourseNode = document.createElement("textarea");
    newCourseNode.classList.add("form-control", "courseField");
    newCourseNode.setAttribute("rows", "3");
    newCourseNode.style.marginTop = "20px";
    newCourseNode.setAttribute("placeholder", "e.g., Web Development Bootcamp, Codecademy");
    var course = document.getElementById("course");
    if (course) {
        course.appendChild(newCourseNode);
    }
    else {
        console.log("Element with id 'course' not found");
    }
}
function addNewSkillField() {
    var newSkillNode = document.createElement("textarea");
    newSkillNode.classList.add("form-control", "skillField");
    newSkillNode.setAttribute("rows", "2");
    newSkillNode.style.marginTop = "15px";
    newSkillNode.setAttribute("placeholder", "e.g., JavaScript, React, Python, Project Management");
    var skill = document.getElementById("skill");
    if (skill) {
        skill.appendChild(newSkillNode);
    }
    else {
        console.log("Element with id 'skill' not found");
    }
}
function addNewExpField() {
    var newExpNode = document.createElement("textarea");
    newExpNode.classList.add("form-control", "expField");
    newExpNode.setAttribute("rows", "3");
    newExpNode.style.marginTop = "20px";
    newExpNode.setAttribute("placeholder", "Describe your role and achievements");
    var experience = document.getElementById("exp");
    if (experience) {
        experience.appendChild(newExpNode);
    }
    else {
        console.log("Element with id 'exp' not found");
    }
}
// generating resume
function genResume(event) {
    var _a;
    event.preventDefault();
    var nameField = document.getElementById("nameField").value;
    var nameResume = document.getElementById("userName");
    if (nameResume) {
        nameResume.innerHTML = nameField;
    }
    document.getElementById("user-phone").innerHTML =
        "<i class=\"fas fa-phone\"></i> ".concat(document.getElementById("contactField").value);
    document.getElementById("user-address").innerHTML =
        "<i class=\"fas fa-map-marker-alt\"></i> ".concat(document.getElementById("addressField").value);
    document.getElementById("user-email").innerHTML =
        "<i class=\"fa-solid fa-envelope\"></i> ".concat(document.getElementById("emailField").value);
    document.getElementById("user-linkedin").innerHTML =
        "<i class=\"fa-brands fa-linkedin\"></i> ".concat(document.getElementById("linkField").value);
    document.getElementById("user-github").innerHTML =
        "<i class=\"fa-brands fa-github\"></i> ".concat(document.getElementById("gitField").value);
    document.getElementById("user-profession").innerHTML =
        document.getElementById("professionField").value;
    document.getElementById("user-profile").innerHTML =
        document.getElementById("proField").value;
    var edField = document.getElementsByClassName("edField");
    var eduStr = " ";
    for (var _i = 0, edField_1 = edField; _i < edField_1.length; _i++) {
        var edu = edField_1[_i];
        eduStr = eduStr + "<li> ".concat(edu.value, " </li>");
    }
    document.getElementById("user-edu").innerHTML = eduStr;
    var courseField = document.getElementsByClassName("courseField");
    var tchStr = " ";
    for (var _b = 0, courseField_1 = courseField; _b < courseField_1.length; _b++) {
        var tch = courseField_1[_b];
        tchStr = tchStr + "<li> ".concat(tch.value, " </li>");
    }
    document.getElementById("user-courses").innerHTML = tchStr;
    var skillField = document.getElementsByClassName("skillField");
    var skillStr = " ";
    for (var _c = 0, skillField_1 = skillField; _c < skillField_1.length; _c++) {
        var skill = skillField_1[_c];
        skillStr = skillStr + "<li> ".concat(skill.value, " </li>");
    }
    document.getElementById("user-skill").innerHTML = skillStr;
    var expField = document.getElementsByClassName("expField");
    var expStr = " ";
    for (var _d = 0, expField_1 = expField; _d < expField_1.length; _d++) {
        var exp = expField_1[_d];
        expStr = expStr + "<li> ".concat(exp.value, " </li>");
    }
    document.getElementById("user-exp").innerHTML = expStr;
    var fileInput = document.getElementById("imgField");
    var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.readAsDataURL(file);
        reader_1.onloadend = function () {
            var result = reader_1.result;
            var imgElement = document.getElementById("user-img");
            imgElement.src = result;
        };
    }
    document.getElementById("resume-input").style.display = "none";
    document.getElementById("resume-generated").style.display = "block";
}
var generateResume = document.getElementById("forms");
generateResume.addEventListener("submit", genResume);
