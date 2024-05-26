function cursorFollower(){
    let cursor = document.querySelector('.cursor')
    window.addEventListener('mousemove',(dets)=>{
        cursor.style.left = dets.x + 'px'
        cursor.style.top = dets.y + 'px'
    })
}
cursorFollower()
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from('.text-animate',{
    opacity:0,
    y:100,
    duration:.75,
    delay:0.75,
    stagger:0.1
})


// function imageHover(){

// let row = document.querySelectorAll('.row').forEach(function (e){
//     e.addEventListener('mouseenter',()=>{
//         e.childNodes[1].style.opacity = 1
//     })
//     e.addEventListener('mouseleave',()=>{
//         e.childNodes[1].style.opacity = 0
//     })
//     e.addEventListener('mousemove',(d)=>{
//         e.childNodes[1].style.top = d.y - e.getBoundingClientRect().top + "px"
//         e.childNodes[1].style.left = d.x - e.getBoundingClientRect().left - 100 + "px"
        
        
        
//     })

    
// })


// }

// imageHover()


document.querySelectorAll(".row").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

