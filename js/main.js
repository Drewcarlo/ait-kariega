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