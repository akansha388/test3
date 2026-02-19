document.getElementById("studentForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let contact=document.getElementById("contact").value.trim();
let email=document.getElementById("email").value.trim();
let password=document.getElementById("password").value.trim();
let course=document.getElementById("course").value;
let department=document.getElementById("department").value;
let subject=document.getElementById("subject").value.trim();
let year=document.getElementById("year").value;

document.querySelectorAll(".error").forEach(x=>x.innerHTML="");

let valid=true;

if(name.length<3){
document.getElementById("nameErr").innerHTML="Enter valid name";
valid=false;
}

if(contact.length!=10 || isNaN(contact)){
document.getElementById("contactErr").innerHTML="10 digit number";
valid=false;
}

if(email===""){
document.getElementById("emailErr").innerHTML="Email required";
valid=false;
}

if(password.length<6){
document.getElementById("passErr").innerHTML="Minimum 6 chars";
valid=false;
}

if(course===""){
document.getElementById("courseErr").innerHTML="Select course";
valid=false;
}

if(department===""){
document.getElementById("deptErr").innerHTML="Select department";
valid=false;
}

if(subject===""){
document.getElementById("subjectErr").innerHTML="Enter subject";
valid=false;
}

if(year===""){
document.getElementById("yearErr").innerHTML="Select year";
valid=false;
}

if(valid){
alert("Registration Successful!");
document.getElementById("studentForm").reset();
}

});
