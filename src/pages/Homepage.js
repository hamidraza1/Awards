import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Banner from "../components/banner";
import Cases from "../components/cases";
import IntroOverlay from "../components/IntroOverlay";

const tl = gsap.timeline();
const homeAnimation = (completaAnimation) => {
  tl.from(".line span", 1, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completaAnimation,
    });
};
const Homepage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completaAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completaAnimation);
  }, []);
  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}

      <Banner />
      <Cases />
    </>
  );
};

export default Homepage;
