function runAnimation() {
  window.requestAnimationFrame(function () {
    /* slide 1 animation script starts here */
    // const restartButton = document.getElementById("sec1");
    var sec1 = document.getElementById("sec1");
    if (sec1) {
      const elaxTimeline = gsap.timeline({
        defaults: { duration: 1, ease: "easeInOut" }
      });

      gsap.set("#sec1 .emcure-logo", { transform: "translateX(80px)", opacity: 0 });
      gsap.set("#sec1 .spegra-logo", { transform: "translateY(-80px)", opacity: 0 });
      gsap.set("#sec1 .line-2", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec1 .pill-1", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec1 .pill-2", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec1 .pill-3", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec1 .tablets-pack", { transform: "translateX(-800px)", opacity: 0 });
      gsap.set("#sec1 .dosage-main", { transform: "translateX(80px)", opacity: 0 });
      gsap.set("#sec1 .health", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec1 .footer-div", { transform: "translateY(80px)", opacity: 0 });


      gsap.set("#sec1 .content-left .tab-img", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec1 .content-left .tab-detail", { transform: "translateY(40px)", opacity: 0 });
      gsap.set("#sec1 .content-middle .tab-img", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec1 .content-middle .tab-detail", { transform: "translateY(40px)", opacity: 0 });
      gsap.set("#sec1 .content-right .tab-img", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec1 .content-right .tab-detail", { transform: "translateY(40px)", opacity: 0 });
      gsap.set("#sec1 .ftr-logo img", { transform: "translateY(40px)", opacity: 0 });


      elaxTimeline
        .to("#sec1 .emcure-logo", { transform: "translateX(0)", opacity: 1, duration: 0.7 })
        .to("#sec1 .spegra-logo", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec1 .line-2", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec1 .pill-1", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec1 .pill-2", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec1 .pill-3", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec1 .tablets-pack", { transform: "translateX(0)", opacity: 1, duration: 0.7 })
        .to("#sec1 .dosage-main", { transform: "translateX(0)", opacity: 1, duration: 0.7 })
        .to("#sec1 .health", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec1 .footer-div", { transform: "translateY(0)", opacity: 1, duration: 0.7 })



        .to("#sec1 .content-left .tab-img", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec1 .content-left .tab-detail", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec1 .content-middle .tab-img", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec1 .content-middle .tab-detail", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec1 .content-right .tab-img", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec1 .content-right .tab-detail", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec1 .ftr-logo img", { transform: "translateY(0)", opacity: 1, stagger: 0.4, duration: 0.7 })



    }

    /* slide 1 animation script ends here */

    /* slide 2 animation script starts here */
    var sec2 = document.getElementById("sec2");
    if (sec2) {
      const elaxTimelinetwo = gsap.timeline({
        defaults: { duration: 1, ease: "easeInOut" }
      });


      gsap.set("#sec2 .emcure-logo", { transform: "translateX(80px)", opacity: 0 });
      gsap.set("#sec2 .spegra-logo", { transform: "translateY(-80px)", opacity: 0 });
      gsap.set("#sec2 .line-2", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec2 .impaact-div", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec2 .efavirenz-div", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec2 .efv-monther", { transform: "translateX(-80px)", opacity: 0 });
      gsap.set("#sec2 .dtg-monther", { transform: "translateX(80px)", opacity: 0 });
      gsap.set("#sec2 .line-m1", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec2 .mother-text", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec2 .footer-div", { transform: "translateY(80px)", opacity: 0 });


      gsap.set("#sec2 .secLogo", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec2 .top-text", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec2 .top-left .tab-img", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec2 .top-left .tab-detail", { transform: "translateY(40px)", opacity: 0 });
      gsap.set("#sec2 .top-right .tab-img", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec2 .top-right .tab-detail", { transform: "translateY(40px)", opacity: 0 });
      gsap.set("#sec2 .left-bottom-box .tab-img", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec2 .left-bottom-box .tab-detail", { transform: "translateY(40px)", opacity: 0 });
      gsap.set("#sec2 .right-head", { transform: "translateX(40px)", opacity: 0 });
      gsap.set("#sec2 .graph img", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec2 .ftr-text", { transform: "translateY(40px)", opacity: 0 });



      elaxTimelinetwo
        .to("#sec2 .emcure-logo", { transform: "translateX(0)", opacity: 1, duration: 0.7 })
        .to("#sec2 .spegra-logo", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec2 .line-2", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec2 .impaact-div", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec2 .efavirenz-div", { transform: "scale(1)", stagger: 0.4, opacity: 1, duration: 0.7 })
        .to("#sec2 .efv-monther", { transform: "translateX(0)", opacity: 1, duration: 0.7 })
        .to("#sec2 .dtg-monther", { transform: "translateX(0)", opacity: 1, duration: 0.7 })
        .to("#sec2 .line-m1", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec2 .mother-text", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec2 .footer-div", { transform: "translateY(0)", opacity: 1, duration: 0.7 })





        .to("#sec2 .secLogo", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec2 .top-text", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec2 .top-left .tab-img", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec2 .top-left .tab-detail", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec2 .top-right .tab-img", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec2 .top-right .tab-detail", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec2 .left-bottom-box .tab-img", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec2 .left-bottom-box .tab-detail", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec2 .right-head", { transform: "translateX(0)", opacity: 1, duration: 0.5 })
        .to("#sec2 .graph img", { transform: "scale(1)", stagger: 0.4, opacity: 1, duration: 0.7 })
        .to("#sec2 .ftr-text", { transform: "translateY(0)", opacity: 1, duration: 0.5 }, "-=0.2")



    }

    /* slide 2 animation script ends here */





    /* slide 3 animation script starts here */
    var sec3 = document.getElementById("sec3");
    if (sec3) {
      const elaxTimelinethree = gsap.timeline({
        defaults: { duration: 1, ease: "easeInOut" }
      });


      gsap.set("#sec3 .emcure-logo", { transform: "translateX(80px)", opacity: 0 });
      gsap.set("#sec3 .spegra-logo", { transform: "translateY(-80px)", opacity: 0 });
      gsap.set("#sec3 .line-2", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec3 .title-wapper", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec3 .chart-wapper", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec3 .footer-div", { transform: "translateY(80px)", opacity: 0 });




      gsap.set("#sec3 .secLogo", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec3 .top-text", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec3 .left-top-box img", { transform: "translateX(-40px)", opacity: 0 });
      gsap.set("#sec3 .left-bottom-box img", { transform: "translateY(40px)", opacity: 0 });
      gsap.set("#sec3 .right-head img", { transform: "translateX(50px)", opacity: 0 });
      gsap.set("#sec3 .graph img", { transform: "scale(0)", opacity: 0 });

      elaxTimelinethree
        .to("#sec3 .emcure-logo", { transform: "translateX(0)", opacity: 1, duration: 0.7 })
        .to("#sec3 .spegra-logo", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec3 .line-2", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec3 .title-wapper", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec3 .chart-wapper", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec3 .footer-div", { transform: "translateY(0)", opacity: 1, duration: 0.7 })

        .to("#sec3 .secLogo", { transform: "translateY(0)", opacity: 1, duration: 0.7 })
        .to("#sec3 .top-text", { transform: "translateY(0)", opacity: 1, duration: 0.6 })
        .to("#sec3 .left-top-box img", { transform: "translateX(0)", opacity: 1, stagger: 0.3, duration: 0.5 })
        .to("#sec3 .left-bottom-box img", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec3 .right-head img", { transform: "translateX(0)", opacity: 1, duration: 0.5 })
        .to("#sec3 .graph img", { transform: "scale(1)", opacity: 1, stagger: 0.3, duration: 0.5 })

    }
    /* slide 3 animation script ends here */


    /* slide 4 animation script starts here */
    var sec4 = document.getElementById("sec4");
    if (sec4) {
      const elaxTimelinefour = gsap.timeline({
        defaults: { duration: 1, ease: "easeInOut" }
      });

      gsap.set("#sec4 .secLogo", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec4 .top-text", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec4 .left-top-box img", { transform: "translateX(-50px)", opacity: 0 });
      gsap.set("#sec4 .left-bottom-box img", { transform: "translateY(50px)", opacity: 0 });
      gsap.set("#sec4 .content-right img", { transform: "scale(0)", opacity: 0 });

      elaxTimelinefour
        .to("#sec4 .secLogo", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec4 .top-text", { transform: "translateY(0)", opacity: 1, duration: 0.6 })
        .to("#sec4 .left-top-box img", { transform: "translateX(0)", opacity: 1, stagger: 0.3, duration: 0.5 })
        .to("#sec4 .left-bottom-box img", { transform: "translateY(0)", opacity: 1, stagger: 0.3, duration: 0.5 })
        .to("#sec4 .content-right img", { transform: "scale(1)", opacity: 1, duration: 0.5 }, "-=0.5")
    }
    /* slide 4 animation script ends here */


    /* slide 5 animation script starts here */
    var sec5 = document.getElementById("sec5");
    if (sec5) {
      const elaxTimelinefive = gsap.timeline({
        defaults: { duration: 1, ease: "easeInOut" }
      });

      gsap.set("#sec5 .secLogo", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec5 .top-text", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec5 .left-top-box img", { transform: "translateX(-50px)", opacity: 0 });
      gsap.set("#sec5 .left-bottom-box img", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec5 .right-head img", { transform: "translateX(50px)", opacity: 0 });
      gsap.set("#sec5 .graph img", { transform: "translateY(50px)", opacity: 0 });

      elaxTimelinefive
        .to("#sec5 .secLogo", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec5 .top-text", { transform: "translateY(0)", opacity: 1, duration: 0.6 })
        .to("#sec5 .left-top-box img", { transform: "translateX(0)", opacity: 1, duration: 0.6 })
        .to("#sec5 .left-bottom-box img", { transform: "scale(1)", opacity: 1, duration: 0.5 })
        .to("#sec5 .right-head img", { transform: "translateX(0)", opacity: 1, duration: 0.5 })
        .to("#sec5 .graph img", { transform: "translateY(0)", opacity: 1, stagger: 0.3, duration: 0.5 })
    }
    /* slide 5 animation script ends here */


    /* slide 5 animation script starts here */
    var sec6 = document.getElementById("sec6");
    if (sec6) {
      const elaxTimelineSix = gsap.timeline({
        defaults: { duration: 1, ease: "easeInOut" }
      });

      gsap.set("#sec6 .secLogo", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec6 .top-text", { transform: "translateY(80px)", opacity: 0 });
      gsap.set("#sec6 .top-head", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec6 .content-box img", { transform: "translateY(-50px)", opacity: 0 });

      elaxTimelineSix
        .to("#sec6 .secLogo", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
        .to("#sec6 .top-text", { transform: "translateY(0)", opacity: 1, duration: 0.6 })
        .to("#sec6 .top-head", { transform: "scale(1)", opacity: 1, duration: 0.6 })
        .to("#sec6 .content-box img", { transform: "translateY(0)", opacity: 1, stagger: 0.3, duration: 0.5 })
    }
    /* slide 5 animation script ends here */

  });
}



