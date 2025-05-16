import React, { useState, useEffect, useRef } from 'react';
import { Location, Info } from './InviteText';
import { PhotosSection } from './Photos';
import { Section1 } from './Section1';
import LogoImg from '@/assets/Logo.svg';
import { Section3 } from './Section3';
import { Section5 } from './Section5';

interface ParallaxSectionProps {
  id: string;
  backgroundImage?: string;
  speed?: number;
  bgSpeed?: number;
  z?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  backgroundImage,
  speed = 0.5,
  bgSpeed = 0.2,
  z = 0,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [bgOffset, setBgOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!proot) {
        return;
      }

      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollPosition = proot?.scrollTop + 1;

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setOffset((scrollPosition - sectionTop) * speed);
          setBgOffset((scrollPosition - sectionTop) * bgSpeed);
        } else if (scrollPosition < sectionTop) {
          setOffset(0);
          setBgOffset(0);
        }
      }
    };

   const proot = document.querySelector('div#parallax-root');
    if (!proot) {
      console.log("No parallax root found");
      return;
    }

    proot.addEventListener('scroll', handleScroll);
    proot.addEventListener('touchmove', handleScroll);

    return () => {
      proot.removeEventListener('scroll', handleScroll);
      proot.removeEventListener('touchmove', handleScroll);
    }

  }, [speed, bgSpeed]);
  
  const sectionStyle: React.CSSProperties = {
    zIndex: z,
  };

  const bgStyle: React.CSSProperties = {

    transform: `translateY(${bgOffset}px) scale(1)`,
    zIndex: -1,
};

const contentId = id + "-content"
const contentStyle = setContentStyle();
function setContentStyle() {
  const style: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
  }

  return style;
}

function ContentComponent({ section }: { section: string }) {
  switch (section) {
    case "section1-content":
      return <Section1 />
    case "section2-content":
      return <Location />
    case "section3-content":
      return <Section3 />
    case "section4-content":
      return <PhotosSection />
    case "section5-content":
      return <Section5 />
    default:
      return (
        <div>whoa there</div>
      )
  }
}

  return (
    <div
      ref={sectionRef}
      id={id}
      className="parallax-section"
      style={sectionStyle}
    >
      { backgroundImage &&
        <img
          src={backgroundImage}
          className="parallax-bg"
          id={id + "-bg"}
        style={bgStyle}
      />}

      <div
        className="parallax-content"
        id={contentId}
        style={contentStyle}
      >
        <ContentComponent section={contentId} />
      </div>
    </div>
  );
};

export default ParallaxSection;