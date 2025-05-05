import './Ha.css'

import ParallaxContainer from './ParallaxContainer';
import ParallaxSection from './ParallaxSection';
import { ContentType } from './ParallaxSection';
import bgSki from '@/assets/BGSki.jpg'; // Import your images
import bg2 from '@/assets/GraphicMid1.svg';
import bg4 from '@/assets/GraphicMid2.svg';
import graphicTop from '@/assets/GraphicTop.svg';
import graphicBottom from '@/assets/GraphicBottom.svg';
import skiWindow from '@/assets/SkiWindow.png';
import skiMid from '@/assets/SkiMidC.png';
import skiHeart from '@/assets/SkiHeartC.png';
import haName from '@/assets/HaName.png';

function Ha() {
  return (
    <ParallaxContainer>
      <ParallaxSection 
        id="section1" 
        backgroundImage={bgSki} 
        content1={skiWindow} 
        c1Type={ContentType.Center} 
        content2={graphicTop}
        c2Type={ContentType.TopLeft} 
        speed={0.3} 
        bgSpeed={0.3}
        z={0}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section2" 
        backgroundImage={bg2} 
        speed={0.3} 
        bgSpeed={0.3}
        z={1}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section3" 
        speed={0.3} 
        bgSpeed={0.3}
        content1={haName}
        c1Type={ContentType.Center} 
        content2={skiMid}
        c2Type={ContentType.Right} 
        z={0}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section4" 
        backgroundImage={bg4} 
        speed={0.6} 
        bgSpeed={0.25}
        content1={skiMid}
        c1Type={ContentType.Center} 
        c2Type={ContentType.Button}
        z={1}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section5"  
        speed={0.7} 
        bgSpeed={0.3}
        content1={skiHeart}
        c1Type={ContentType.Left}
        content2={graphicBottom}
        c2Type={ContentType.BottomRight}
        z={0}
      >
      </ParallaxSection>
    </ParallaxContainer>
  );
}

export default Ha
