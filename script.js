const homepageAnimation = () => {
  gsap.set(".slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });
  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "anim"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "anim"
  );

  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "anim2"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.03,
      ease: Power4,
    },
    "anim2"
  );
};

function realSectionAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
    },
    xPercent: -310,
    ease: Power4,
  });
}

function teamAnimation() {
  var listelem = document.querySelectorAll(".listelem");
  listelem.forEach(function (el) {
    const piks = el.querySelector(".picture");

    el.addEventListener("mouseover", function (dets) {
      const imageSrc = piks.getAttribute("data-img");
      piks.style.backgroundImage = `url(${imageSrc})`;
      piks.style.width = "14rem";
      piks.style.height = "14rem";
      piks.style.backgroundSize = "cover";
      piks.style.opacity = "1";

      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

function paraAnimation() {
  var clutter = "";
  document
    .querySelector(".textpara p")
    .textContent.split("")
    .forEach(function (elem) {
      if (elem === " ") {
        clutter += `<span>&nbsp;</span>`;
      }
      clutter += `<span>${elem}</span>`;
    });
  document.querySelector(".textpara p").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: 0.1 });

  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      // markers: true,
      start: "top 50%",
      end: "bottom 80%",
      scrub: 0.5,
    },
    opacity: 1,
    ease: Power4,
    stagger: 0.03,
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsuleAnimation() {
  var capsuleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".capsules",
      // markers:  true,
      start: " top 70%",
      end: "bottom bottom",
      scrub: 0.5,
    },
  });
  capsuleTimeline.to(
    ".capsule:nth-child(1)",
    {
      transform: "rotate(-16deg)",
      ease: Power4,
    },
    "capsule"
  );
  capsuleTimeline.to(
    ".capsule:nth-child(2)",
    {
      y: 0,
      ease: Power4,
    },
    "capsule"
  );
}

function dynamicColor() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,

      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

loco();
homepageAnimation();
realSectionAnimation();
teamAnimation();
paraAnimation();
capsuleAnimation();
dynamicColor();
