import React, { useState, useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  id: string;
  backgroundImage: string;
  imageType: 'jpg' | 'svg';
  speed?: number;
  bgSpeed?: number;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  backgroundImage,
  imageType,
  speed = 0.5,
  bgSpeed = 0.2,
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [bgOffset, setBgOffset] = useState(0);
    const proot = document.querySelector('div#parallax-root');

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = proot?.clientHeight;
        const scrollPosition = proot?.scrollTop;
        console.log(scrollPosition);

        // Calculate when the section is in view (adjust thresholds as needed)
        if (scrollPosition + viewportHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setOffset((scrollPosition - sectionTop) * speed);
          setBgOffset((scrollPosition - sectionTop) * bgSpeed);
        } else if (scrollPosition < sectionTop) {
          setOffset(0);
          setBgOffset(0);
        } else if (scrollPosition > sectionTop + sectionHeight - viewportHeight) {
          setOffset((sectionTop + sectionHeight - viewportHeight) * speed);
          setBgOffset((sectionTop + sectionHeight - viewportHeight) * bgSpeed);
        }
        console.log(offset, bgOffset);
      }
    };


    if (proot) {
      proot.addEventListener('scroll', handleScroll);

      return () => {
        proot.removeEventListener('scroll', handleScroll);
      };
    }
  }, [speed, bgSpeed]);

  const bgStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url('${backgroundImage}')`,
    backgroundRepeat: 'no-repeat',
    transform: `translateZ(-5px) translateY(${bgOffset}px) scale(1.5)`,
    zIndex: -1,
};

if (imageType === 'svg') {
    bgStyle.backgroundPosition = 'center';
    bgStyle.width = '100%';
} else if (imageType === 'jpg') {
    bgStyle.backgroundSize = 'cover';
    bgStyle.backgroundPosition = 'center';
}

  return (
    <div
      ref={sectionRef}
      id={id}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        transformStyle: 'preserve-3d',
        overflow: 'hidden', // To contain the absolute positioned background
      }}
    >
      <div
          style={bgStyle}
      />
      <div
        className="content"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '8px',
          fontSize: '2em',
          textAlign: 'center',
          zIndex: 1,
          transform: `translateY(${offset}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;