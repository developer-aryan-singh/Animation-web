gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.create({
    trigger: '.li1',
    pin: true,
    start: 'top center',
    end: 'bottom 55%',
    scrub: 1,
    markers: false,
    onEnter: () => {
        document.querySelector(".box1").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeave: () => {
        document.querySelector(".box1").classList.remove("solutions-client_visibleTransition__O1i3U");
        document.querySelector(".box1").classList.add("solutions-client_hiddenTransition__kKY1W");
    },
    onEnterBack: () => {
        document.querySelector(".box1").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeaveBack: () => {
        document.querySelector(".box1").classList.remove("solutions-client_hiddenTransition__kKY1W");
    },
})
ScrollTrigger.create({
    trigger: '.li2',
    pin: true,
    start: 'top center',
    end: 'bottom 55%',
    scrub: 1,
    markers: false,
    onEnter: () => {
        document.querySelector(".box2").classList.remove("solutions-client_hiddenTransition__kKY1W");
        document.querySelector(".box2").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeave: () => {
        document.querySelector(".box2").classList.remove("solutions-client_visibleTransition__O1i3U");
        document.querySelector(".box2").classList.add("solutions-client_hiddenTransition__kKY1W");
    },
    onEnterBack: () => {
        document.querySelector(".box2").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeaveBack: () => {
        document.querySelector(".box2").classList.remove("solutions-client_visibleTransition__O1i3U");
    },
})
ScrollTrigger.create({
    trigger: '.li3',
    pin: true,
    start: 'top center',
    end: 'bottom 55%',
    scrub: 1,
    markers: false,
    onEnter: () => {
        document.querySelector(".box3").classList.remove("solutions-client_hiddenTransition__kKY1W");
        document.querySelector(".box3").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeave: () => {
        document.querySelector(".box3").classList.remove("solutions-client_visibleTransition__O1i3U");
        document.querySelector(".box3").classList.add("solutions-client_hiddenTransition__kKY1W");
    },
    onEnterBack: () => {
        document.querySelector(".box3").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeaveBack: () => {
        document.querySelector(".box3").classList.remove("solutions-client_visibleTransition__O1i3U");
    },
})
ScrollTrigger.create({
    trigger: '.li4',
    pin: true,
    start: 'top center',
    end: 'bottom 55%',
    scrub: 1,
    markers: false,
    onEnter: () => {
        document.querySelector(".box4").classList.remove("solutions-client_hiddenTransition__kKY1W");
        document.querySelector(".box4").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeave: () => {
        document.querySelector(".box4").classList.remove("solutions-client_visibleTransition__O1i3U");
        document.querySelector(".box4").classList.add("solutions-client_hiddenTransition__kKY1W");
    },
    onEnterBack: () => {
        document.querySelector(".box4").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeaveBack: () => {
        document.querySelector(".box4").classList.remove("solutions-client_visibleTransition__O1i3U");
    },
})
ScrollTrigger.create({
    trigger: '.li5',
    pin: true,
    start: 'top center',
    end: 'bottom 55%',
    scrub: 1,
    markers: false,
    onEnter: () => {
        document.querySelector(".box5").classList.remove("solutions-client_hiddenTransition__kKY1W");
        document.querySelector(".box5").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeave: () => {
        document.querySelector(".box5").classList.remove("solutions-client_visibleTransition__O1i3U");
        document.querySelector(".box5").classList.add("solutions-client_hiddenTransition__kKY1W");
    },
    onEnterBack: () => {
        document.querySelector(".box5").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeaveBack: () => {
        document.querySelector(".box5").classList.remove("solutions-client_visibleTransition__O1i3U");
    },
})
ScrollTrigger.create({
    trigger: '.li6',
    pin: true,
    start: 'top center',
    end: 'bottom 55%',
    scrub: 1,
    markers: false,
    onEnter: () => {
        document.querySelector(".box6").classList.remove("solutions-client_hiddenTransition__kKY1W");
        document.querySelector(".box6").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onEnterBack: () => {
        document.querySelector(".box6").classList.add("solutions-client_visibleTransition__O1i3U");
    },
    onLeaveBack: () => {
        document.querySelector(".box6").classList.remove("solutions-client_visibleTransition__O1i3U");
    },
})
 
 
 

let counterElement = document.getElementById("counter");
let counterObj = { value: 0 }; // Object for GSAP to animate

gsap.to(counterObj, { 
    value: 200, 
    duration: 3, 
    ease: "power1.out", 
    onUpdate: function () {
        counterElement.textContent = Math.floor(counterObj.value);
    },
    scrollTrigger: {
        trigger: ".counter",
        start: "top 80%",  // Start when the section is 80% visible
        toggleActions: "play none none reset"
    }
});



/* =====================marquee animation================= */
function createMarqueeAnimation(selector, direction) {
    let marquee = document.querySelector(selector);
    let clone = marquee.innerHTML + marquee.innerHTML; 
    marquee.innerHTML = clone; 

    let distance = marquee.scrollWidth / 2; 

    let tl = gsap.timeline({
        repeat: -1, 
        defaults: { ease: "none", duration: 10 } // Smooth speed
    });

    tl.fromTo(marquee, { x: direction === "right" ? 0 : -distance }, { x: direction === "right" ? -distance : 0 });

    ScrollTrigger.create({
        trigger: selector,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onUpdate: (self) => {
            let scrollDir = self.direction === 1 ? "forward" : "reverse";
            tl.timeScale(scrollDir === "forward" ? 1 : -1); // Reverse on scroll up
        }
    });
}
createMarqueeAnimation("#marquee1", "right");
createMarqueeAnimation("#marquee2", "left");
 


/* ======================animate services================= */
document.addEventListener("DOMContentLoaded", () => {
   
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray(".top_left_translate").forEach((section) => {
        gsap.fromTo(
            section, {
                y: 0,
                z: 0,
                x: 0,
            }, {
                y: -200,
                z: 0,
                x: -70,
                scrollTrigger: {
                    trigger: '.animation-drives-us',
                    // toggleActions: "play none none none",
                    start: 'top 20%',
                    end: 'bottom 30%',
                    scrub: 1,
                    markers: false,
                },
            }
        );
    });

    gsap.utils.toArray(".top_right_translate").forEach((section) => {
        gsap.fromTo(
            section, {
                y: 0,
                z: 0,
                x: 0,
            }, {
                y: -200,
                z: 0,
                x: 70,
                scrollTrigger: {
                    trigger: '.animation-drives-us',
                    // toggleActions: "play none none none",
                    start: 'top 20%',
                    end: 'bottom 30%',
                    scrub: 1,
                    markers: false,
                },
            }
        );
    });

    gsap.utils.toArray(".right_translate").forEach((section) => {
        gsap.fromTo(
            section, {
                y: 0,
                z: 0,
                x: 0,
            }, {
                y: 0,
                z: 0,
                x: 200,
                scrollTrigger: {
                    trigger: '.animation-drives-us',
                    // toggleActions: "play none none none",
                    start: 'top 20%',
                    end: 'bottom 30%',
                    scrub: 1,
                    markers: false,
                },
            }
        );
    });

    gsap.utils.toArray(".left_translate").forEach((section) => {
        gsap.fromTo(
            section, {
                y: 0,
                z: 0,
                x: 0,
            }, {
                y: 0,
                z: 0,
                x: -200,
                scrollTrigger: {
                    trigger: '.animation-drives-us',
                    // toggleActions: "play none none none",
                    start: 'top 20%',
                    end: 'bottom 30%',
                    scrub: 1,
                    markers: false,
                },
            }
        );
    });
});



/* ================slider==================== */
gsap.registerPlugin(ScrollTrigger);

let contents = document.querySelector(".contents");
let totalWidth = contents.scrollWidth;
let containerWidth = document.querySelector(".container-slider").offsetWidth;
let maxScroll = totalWidth - containerWidth;
let currentScroll = 0;
    
let scrollAnimation = gsap.to(contents, {
    x: -maxScroll,
    ease: "none",
    scrollTrigger: {
        trigger: ".container-slider",
        start: "top 60%",
        end: "bottom top",
        scrub: 1
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentScroll > -maxScroll) {
        currentScroll -= 220; 
        gsap.to(contents, { x: currentScroll, duration: 0.5 });
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentScroll < 0) {
        currentScroll += 220; 
        gsap.to(contents, { x: currentScroll, duration: 0.5 });
    }
});










