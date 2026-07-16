const courses = [

{
title:"Computer Literacy",

category:"IT",

duration:"2 Days & 3 Nights",

requirements:"Grade 10",

careers:[
"Office Administrator",
"Receptionist",
"Data Capturer"
],

image:"assets/images/courses/computer-literacy.jpg",

description:
"Learn Microsoft Office, email, internet and workplace computer skills."

},

{
title:"Electrical Engineering",

category:"Business",

duration:"N5 - N6",

requirements:"Technical Matric or N4",

careers:[
"Electrician",
"Technician",
"Engineer"
],

image:"assets/images/courses/software-development.jpg",

description:
"Learn essential knowledge about the electrical trade."

},

{
title:"Mechanical Engineering",

category:"Business",

duration:"N5 - N6",

requirements:"Technical Matric or N4",

careers:[
"Engineer",
"Technician",
"Mechanic"
],

image:"assets/images/courses/networking.jpg",

description:
"Learn essential knowlege about the mechanical trade."

}

];

const grid = document.getElementById("courseGrid");

function displayCourses(list){

grid.innerHTML="";

list.forEach(course=>{

grid.innerHTML+=`

<div class="programme-card fade">

<img src="${course.image}">

<div class="programme-content">

<span class="badge">

${course.category}

</span>

<h3>${course.title}</h3>

<p>${course.description}</p>

<div class="programme-info">

<span>📅 ${course.duration}</span>

<span>🎓 ${course.requirements}</span>

</div>

<button class="career-btn">

Career Opportunities

</button>

<ul class="career-list">

${course.careers.map(c=>`<li>${c}</li>`).join("")}

</ul>

<a href="#" class="btn btn-primary">

View Programme

</a>

</div>

</div>

`;

});

}

displayCourses(courses);

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("career-btn")){

const list=e.target.nextElementSibling;

list.style.display=

list.style.display==="block"

?

"none"

:

"block";

}

});

const search=document.getElementById("courseSearch");

search.addEventListener("input",()=>{

const value=

search.value.toLowerCase();

const filtered=

courses.filter(course=>

course.title.toLowerCase().includes(value)

);

displayCourses(filtered);

});

const categoryButtons = document.querySelectorAll(".category-buttons button");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const category = button.CDATA_SECTION_NODE.category;
        if(category === "All"){
            displayCourses(courses);
            return;
        }
        displayCourses(
            courses.filter(course => course.category === category)
        );
    });
});