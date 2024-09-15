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
        width:"13%"
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
        width:"13%"
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
        width:"18vh"
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
        width:"40vw"
    })
});



