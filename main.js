/* ======================== MENU ======================== */
const headerBurger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const navClose = document.querySelector('.nav__close')
const pageContent = document.querySelector('.page-content')

const closeMenu = (btn) => {
   btn.addEventListener('click', () => {
      pageContent.classList.toggle('active')
      nav.classList.toggle('active')
   })
}
closeMenu(headerBurger)
closeMenu(navClose)


/* ======================== LENIS ======================= */
const lenis = new Lenis()

function raf(time) {
   lenis.raf(time)
   requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


/* ====================== PARALLAX ====================== */


const tlIntro = gsap.timeline()

const tl = gsap.timeline({
   scrollTrigger: {
      trigger: '.container-animation',
      start: "top top",
      scrub: 1,
      // markers: true      
   }
})
tl.scrollTrigger.disable()


tlIntro
   .fromTo('.header', 2, { y: '-100%' }, { y: '0%' })
   .fromTo('.bg-full', 2, { opacity: 0 }, { opacity: 1 }, 0)
   .fromTo('.soldier', 2, { y: 500 }, { y: 0, opacity: 1 }, 0)
   .fromTo('.title-album', 2, { y: 300, opacity: 0 }, { y: 0, opacity: 1 }, 1)
   .fromTo('.mountain-left', 2, { y: '10%', opacity: 0 }, { y: '0%', opacity: 1 }, 0)
   .fromTo('.mountain-right', 2, { y: '10%', opacity: 0 }, { y: '0%', opacity: 1 }, 0)
   .eventCallback("onComplete", function () {
      // Activar el disparador cuando la animación tlIntro haya finalizado
      tl.scrollTrigger.enable();
   });

tl
   .to('.mountain-left', { y: 30 })
   .to('.mountain-right', { y: 30 }, 0)
   .to('.soldier', { y: 25 }, 0)
   .to('.bg-full', { y: -40 }, 0)
   .to('.title-album', { y: 55 }, 0)
