const Tl = gsap.timeline()

Tl.from('.back-img', {
    scale: 1,
    opacity: 0,
    duration: .5,
    ease: 'power2.out',
    delay: .5
})

Tl.from('.nav-bar', {
    y: -200,
    duration: 1,
   
})

Tl.from('.content span', {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: .4
})

Tl.from('.logo', {
    x: -200,
    duration: .5,
    ease: 'power2.out',
})

Tl.from('.list li',{
    scale: 0,
    // x: 200,
    stagger: .2,
    duration: .5,
    ease: 'power2.out',
})

Tl.from('.nav-bar button', {
    x: 200,
    duration:.5,
    ease: 'power2.out',
}, "op")

//Text split 

let text =  new SplitType('.content .info-txt')

Tl.from('.content .info-txt .word', {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    stagger:.4,
    onComplete: function() {
        gsap.from('.back-img', {
            filter: "drop-shadow(8px 10px 20px rgba(255, 0, 255, 0.3))",
            yoyo: true,
            repeat: -1,
            delay: 1
        })
    }
},"op")

