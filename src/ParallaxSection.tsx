import React, { useState, useEffect, useRef } from 'react';

export enum ContentAlignment {
  TopLeft, 
  Center,
  Right, 
  Left, 
  BottomRight,
  Button,
}

interface ParallaxSectionProps {
  id: string;
  backgroundImage?: string;
  speed?: number;
  bgSpeed?: number;
  content1?: string;
  c1Alignment?: ContentAlignment;
  content2?: string;
  c2Alignment?: ContentAlignment;
  z?: number;
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
  z = 0,
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

    if (!proot) {
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

const c1Id = id + "-content1"
const c2Id = id + "-content2"

const c1Style = setContentStyle(c1Alignment);
const c2Style = setContentStyle(c2Alignment);

const imgStyle: React.CSSProperties = {
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
    objectFit: 'cover',
}

function setContentStyle(alignment: ContentAlignment) {

  const style: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
  }

  switch (alignment) {
    case ContentAlignment.TopLeft:
      style.top = '0';
      style.left = '0';
      break;
    case ContentAlignment.Center:
      style.top = 'auto';
      style.left = 'auto';
      break;
    case ContentAlignment.Right:
      style.top = 'auto';
      style.right = '0';
      break;
    case ContentAlignment.Left:
      style.top = 'auto';
      style.left = '0';
      break;
    case ContentAlignment.BottomRight:
      style.bottom = '0';
      style.right = '0';
      break;
  }

  return style;
}

  return (
    <div
      ref={sectionRef}
      id={id}
      className="parallax-section"
      style={sectionStyle}
    >
      <img
        src={backgroundImage}
        className="parallax-bg"
        style={bgStyle}
      />
      <div
        className="parallax-content"
        id={c1Id}
        style={c1Style}
      >
        <img 
          src={content1}
          style={imgStyle}
        />
      </div>

      <div
        className="parallax-content"
        id={c2Id}
        style={c2Style}
      >
        <img 
          src={content2}
          style={imgStyle}
        />
        { c2Alignment === ContentAlignment.Button && 
          <a href="/vn/" className="tea-ceremony-button">TEA CEREMONY</a> 
        }
      </div>
    </div>
  );
};

export default ParallaxSection;