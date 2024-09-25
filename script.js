
var text_anim = gsap.timeline({
    ease: "Power1.easeInOut"
})

text_anim.from(" .h1-name",{
    duration:1,
    y:"50%",
    opacity:"0",
    stagger:"0.3"
})
var img_anim = gsap.timeline({scrollTrigger:{

    trigger:".top-picks-container",
    start:"10% 80%",
    end:"50% 50%",
    scrub:true,
    // markers:true,

}})

img_anim.from(" .top-img",{
    duration:1.5,
    y:"50%",
    opacity:"0",
    stagger:"0.5"
})
var about_text_anim = gsap.timeline({scrollTrigger:{

    trigger:".about-section",
    start:"30% 50%",
    end:"50% 50%",
    scrub:true,
    // markers:true,

}})

about_text_anim.from(" .about-text",{
    duration:1,
    y:"50%",
    opacity:"0",
    stagger:"0.5",
    ease:"powerInOut"
})




let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    var tl = gsap.timeline({scrollTrigger:{

        trigger:".top-picks-container",
        start:"10% 100%",
        end:"50% 50%",
        scrub:true,
        // markers:true,
    
    }})
    
    tl.to("#hero-img", {
        top:"117%",
        right:"43%",
        width:"13%",
         opacity:"0"
    })
    var tl2 = gsap.timeline({scrollTrigger:{
    
        trigger:".about-section",
        start:"10% 100%",
        end:"50% 50%",
        scrub:true,
        // markers:true,
    
    }})
    
    tl2.to("#susi-img", {
        top:"230%",
        right:"69%",
        width:"13%",
        opacity:"1"
    })



});




mm.add("(max-width: 769px)", () => {
    var tl = gsap.timeline({scrollTrigger:{

        trigger:".top-picks-container",
        start:"0% 100%",
        end:"50% 50%",
        scrub:true,
        // markers:true,
    
    }})
    
    tl.to("#hero-img", {
        top:"115vh",
        right:"9vw",
        width:"18vh",
        opacity:"0"
    })
    var tl2 = gsap.timeline({scrollTrigger:{
    
        trigger:".about-section",
        start:"0% 100%",
        end:"50% 50%",
        scrub:true,
        // markers:true,
    
    }})
    
    tl2.to("#susi-img", {
        top:"216vh",
        right:"51vw",
        width:"40vw",
        opacity:"1"
    })
});



