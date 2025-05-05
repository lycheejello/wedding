import './Ha.css'

import ParallaxContainer from './ParallaxContainer';
import ParallaxSection from './ParallaxSection';
import { ContentAlignment } from './ParallaxSection';
import bg1 from '@/assets/image1.jpg'; // Import your images
import bg2 from '@/assets/Middle1.svg';
import bg3 from '@/assets/Middle2.svg';
import bg4 from '@/assets/Middle1.svg';
import bg5 from '@/assets/image1.jpg';
import skiWindow from '@/assets/Ski_Window.svg';
import skiLeft from '@/assets/SkiLeft.jpg';
import skiHeart from '@/assets/SkiHeart.jpg';
import haName from '@/assets/HaName.png';

function Ha() {
  return (
    <ParallaxContainer>
      <ParallaxSection 
        id="section1" 
        backgroundImage={bg1} 
        content1={skiWindow} 
        c1Alignment={ContentAlignment.Center} 
        content2={skiWindow}
        c2Alignment={ContentAlignment.TopLeft} 
        speed={0.3} 
        bgSpeed={0.3}
        z={0}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section2" 
        backgroundImage={bg2} 
        speed={0.3} 
        bgSpeed={0.1}
        z={1}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section3" 
        backgroundImage={bg3} 
        speed={0.5} 
        bgSpeed={0.2}
        content1={haName}
        c1Alignment={ContentAlignment.Center} 
        content2={skiWindow}
        c2Alignment={ContentAlignment.Right} 
        z={0}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section4" 
        backgroundImage={bg4} 
        speed={0.6} 
        bgSpeed={0.25}
        content1={skiLeft}
        c1Alignment={ContentAlignment.Center} 
        c2Alignment={ContentAlignment.Button}
        z={1}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section5"  
        backgroundImage={bg5} 
        speed={0.7} 
        bgSpeed={0.3}
        content1={skiWindow}
        c1Alignment={ContentAlignment.Left}
        content2={skiWindow}
        c2Alignment={ContentAlignment.BottomRight}
        z={0}
      >
      </ParallaxSection>
    </ParallaxContainer>
  );
}

export default Ha
