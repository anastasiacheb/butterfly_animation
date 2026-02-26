gsap.to("#diamond", {
  morphSVG: "#lightning",
  duration: 2,
  ease: "expo.inOut",
  repeat: -1,
  yoyo: true
});

gsap.to("#one", {
  morphSVG: "#two",
  duration: 2,
  ease: "expo.inOut",
  repeat: -1,
  yoyo: true
});

gsap.to("#oneone", {
  morphSVG: "#twotwo",
  duration: 2,
  ease: "expo.inOut",
  repeat: -1,
  yoyo: true
});

gsap.registerPlugin(MorphSVGPlugin);

const from = gsap.utils.toArray("#icon1 path");
const to   = gsap.utils.toArray("#icon2 path");

gsap.to(from, {
  morphSVG: (i) => to[i],
  duration: 2,
  ease: "expo.inOut",
  repeat: -1,
  yoyo: true
});



gsap.fromTo("#icon1",
  { xPercent: 100

   }, // старт — за экраном справа
  {
    xPercent: 0,   // центр
    duration: 2,
    ease: "expo.inOut",
    repeat: -1,
    yoyo: true
  }
);



// gsap.registerPlugin(MorphSVGPlugin)

// const from = gsap.utils.toArray("#icon1 path")
// const to   = gsap.utils.toArray("#icon2 path")

// gsap.to(from, {
//   duration: 1,
//   morphSVG: (i) => to[i],
//   ease: "power2.inOut"
// })