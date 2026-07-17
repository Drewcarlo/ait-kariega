console.log("AIT Website Loaded");

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = +counter.dataset.target;
    let current = 0;

    const increment = target / 80;

    const update = () => {

        current += increment;

        if(current < target){

            counter.innerText = Math.ceil(current);

            requestAnimationFrame(update);

        } else{

            counter.innerText = target + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const course = document.getElementById("course").value;

    const message = document.getElementById("message").value;

    const whatsappMessage =

`Hello AIT Kariega,

My name is ${name}.

I am interested in the ${course} programme.

Phone Number:
${phone}

My enquiry:

${message}

I look forward to hearing from you.`;

    const url =
`https://wa.me/27726096649text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

});
