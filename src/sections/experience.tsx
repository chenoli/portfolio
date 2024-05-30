import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Counter from "../components/counter";
import Text from "../components/text";
import cat from "../assets/cat.png";

function ExperienceSection(): React.ReactElement {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const xPos = (clientX / windowWidth - 0.5) * 20; // Ajuste o valor 20 para controlar a intensidade do efeito
      const yPos = (clientY / windowHeight - 0.5) * 20;

      gsap.to(parallaxRef.current, {
        x: xPos,
        y: yPos,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="flex justify-center pt-8 pb-16">
      <div className="flex flex-col max-w-base">
        <Text bold className="text-secondary text-xxl text-center">
          experience
        </Text>
        <div className="flex mt-16" ref={parallaxRef}>
          <div className="flex flex-1 justify-between flex-col">
            <Counter />
            <Counter />
          </div>
          <div className="mx-16">
            <img src={cat} alt="" />
          </div>
          <div className="flex flex-1 justify-between flex-col">
            <Counter />
            <Counter />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
