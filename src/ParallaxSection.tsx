import React, { useState, useEffect, useRef } from 'react';

export enum ContentAlignment {
  TopLeft, 
  Center,
}

interface ParallaxSectionProps {
  id: string;
  backgroundImage: string;
  speed?: number;
  bgSpeed?: number;
  content1?: string;
  c1Alignment?: ContentAlignment;
  content2?: string;
  c2Alignment?: ContentAlignment;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  backgroundImage,
  speed = 0.5,
  bgSpeed = 0.2,
  content1,
  c1Alignment = ContentAlignment.Center,
  content2,
  c2Alignment = ContentAlignment.Center,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [bgOffset, setBgOffset] = useState(0);
  const proot = document.querySelector('div#parallax-root');

  useEffect(() => {
    const handleScroll = () => {

      if (!proot) {
        return;
      }

      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = proot?.clientHeight;
        const scrollPosition = proot?.scrollTop;


        // Calculate when the section is in view (adjust thresholds as needed)
        if (scrollPosition + 1  > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setOffset((scrollPosition - sectionTop) * speed);
          setBgOffset((scrollPosition - sectionTop) * bgSpeed);
        } else if (scrollPosition < sectionTop) {
          setOffset(0);
          setBgOffset(0);
        } else if (scrollPosition > sectionTop + sectionHeight - viewportHeight) {
          setOffset((sectionTop + sectionHeight - viewportHeight) * speed);
          setBgOffset((sectionTop + sectionHeight - viewportHeight) * bgSpeed);
        }
      }
    };

    if (!proot) {
      return;
    }

    proot.addEventListener('scroll', handleScroll);

    return () => {
      proot.removeEventListener('scroll', handleScroll);
    }

  }, [speed, bgSpeed]);
  
  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    transformStyle: 'preserve-3d',
  };

  const bgStyle: React.CSSProperties = {
    display: 'block',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    //backgroundImage: `url('${backgroundImage}')`,
    //backgroundRepeat: 'no-repeat',
    maxWidth: '100%',
    width: 'auto',
    height: 'auto',
    transform: `translateY(${bgOffset}px) scale(1)`,
    zIndex: -1,
};

const contentStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'rgba(255, 0, 255, 0.5)',
    width: '30%',
    zIndex: 1,
    transform: `translateY(${offset}px)`,
}

const c1Style = structuredClone(contentStyle);
const c2Style = structuredClone(contentStyle);

setContentStyle(c1Style, c1Alignment);
setContentStyle(c2Style, c2Alignment);

function setContentStyle(style: React.CSSProperties, alignment: ContentAlignment) {
  switch (alignment) {
    case ContentAlignment.TopLeft:
      style.top = '0';
      style.left = '0';
      break;
    case ContentAlignment.Center:
      style.top = 'auto';
      style.left = 'auto';
      break;
  }
    
}

  return (
    <div
      ref={sectionRef}
      id={id}
      style={sectionStyle}
    >
      <img
        src={backgroundImage}
        style={bgStyle}
      />
      <div
        className="content1"
        style={c1Style}
      >
        <img 
          src={content1}
        />
      </div>

      <div
        className="content2"
        style={c2Style}
      >
        <img 
          src={content2}
        />
      </div>
    </div>
  );
};

export default ParallaxSection;