import React, { useState, useEffect, useRef } from 'react';
import { Location, EventDate, Info, PhotosText } from './InviteText';
import { Photos } from './Photos';
import LogoImg from '@/assets/Logo.svg';
import NameImg from '@/assets/Name.png';

export enum ContentType {
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
  c1Type?: ContentType;
  content2?: string;
  c2Type?: ContentType;
  z?: number;
}


const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  backgroundImage,
  speed = 0.5,
  bgSpeed = 0.2,
  content1,
  c1Type = ContentType.Center,
  content2,
  c2Type = ContentType.Center,
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

const c1Id = id + "-content1"
const c2Id = id + "-content2"


const c1Style = setContentStyle(c1Type);
const c2Style = setContentStyle(c2Type);

const imgStyle: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '100%',
  height: 'auto',
  objectFit: 'cover',
}

const renderContent2 = () => {
  switch (c2Id) {
    case "section1-content2":
      return <div id="header-container">
        <img src={content2} style={imgStyle} />
        <img id="header-name" src={NameImg} />
        </div>
    case "section2-content2":
      return <Location />
    case "section3-content2":
      return <EventDate />
    case "section4-content2":
      return (
        <a href="/vn/">
          <button className="tea-ceremony-button">WAY MORE PHOTOS</button>
        </a>
      )
    default:
      return (
        <img id="default-img" src={content2}/>
      )
  }
}

function setContentStyle(alignment: ContentType) {

  const style: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
  }

  switch (alignment) {
    case ContentType.TopLeft:
      style.top = '0';
      style.left = '0';
      break;
    case ContentType.Center:
      style.top = 'auto';
      style.left = 'auto';
      break;
    case ContentType.Right:
      style.top = 'auto';
      style.right = '0';
      break;
    case ContentType.Left:
      style.top = 'auto';
      style.left = '0';
      break;
    case ContentType.BottomRight:
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

      { backgroundImage &&
        <img
          src={backgroundImage}
          className="parallax-bg"
          id={id + "-bg"}
        style={bgStyle}
      />}
      

      { id === "section4" && 
        <div
          id={id + "-content-photos"}
          className={"parallax-content"} 
          style={ setContentStyle(ContentType.Center) }
        >
        <PhotosText />
        <Photos />
        </div>
      }

      { id === "section5" && 
          <div
            id={id + "-content-info"} 
            className={"parallax-content"} 
            style={ setContentStyle(ContentType.Center) }
          >
        <Info />
        </div>
      }

      { content1 &&
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
      }

      <div
        className="parallax-content"
        id={c2Id}
        style={c2Style}
      >
        {renderContent2()}
      </div>
    </div>
  );
};

export default ParallaxSection;