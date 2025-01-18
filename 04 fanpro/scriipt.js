// var timeline = gsap.timeline({scrollTrigger:{
//     trigger: ".two",
//     start: "50% 50%",
//     end: "50% 50%",
//     scrub:true,
//     markers:true,

// }})

gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 90%",
        end: "53% 50%",
        scrub: true,
        // markers: true,
    },
});

timeline.to("#fanta",{
    top: "120%",
    left: "0%",
},'orange')
timeline.to("#orange2",{
    top: "160%",
    left: "26%",
},'orange')
timeline.to("#orange1",{
    top: "160%",
    right: "10%",
    width: "20%"
},'orange')
timeline.to("#leaf1",{
    top: "110%",
    left: "80%",
    rotate:'130deg'
   
},'orange')
timeline.to("#leaf2",{
    top: "110%",
    left:'20%',
    right: "10%",
    
},'orange')



var timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 90%",
        end: "53% 50%",
        scrub: true,
        // markers: true,
    },
});

timeline2.from(".lemon1",{
    rotate:"-90deg",
    left:'-50%',
    top:"110%"
},'lem')
timeline2.from("#coc",{
    rotate:"-90deg",
    
    top:"110%"
},'lem')

timeline2.from("#pepsi",{
    rotate:"90deg",
    // right:'-50%',
    top:"110%"
},'lem')
timeline2.from(".lemon2",{
    rotate:"-90deg",
    right:'-50%',
    top:"110%"
},'lem')

timeline2.to("#orange2",{
    left:'42%',
    top:"205%",
    width:'13%'
},'lem')
timeline2.to("#fanta",{
    left:'35%',
    top:"219%",
    width:"30%"
},'lem')




