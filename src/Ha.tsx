import './Ha.css'

import ParallaxContainer from './ParallaxContainer';
import ParallaxSection from './ParallaxSection';
import { ContentAlignment } from './ParallaxSection';
import image1 from '@/assets/image1.jpg'; // Import your images
import image2 from '@/assets/Middle1.svg';
import image3 from '@/assets/Middle2.svg';
import image4 from '@/assets/image1.jpg';
import image5 from '@/assets/image1.jpg';
import skiWindow from '@/assets/Ski_Window.svg';

function Ha() {
  return (
    <ParallaxContainer>
      <ParallaxSection 
        id="section1" 
        backgroundImage={image1} 
        content1={skiWindow} 
        c1Alignment={ContentAlignment.Center} 
        content2={skiWindow}
        c2Alignment={ContentAlignment.TopLeft} 
        speed={0.3} 
        bgSpeed={0.3}
      >
      </ParallaxSection>
      <ParallaxSection id="section2" backgroundImage={image2} speed={0.3} bgSpeed={0.1}>
      </ParallaxSection>
      <ParallaxSection id="section3" backgroundImage={image3} speed={0.5} bgSpeed={0.2}>
      </ParallaxSection>
      <ParallaxSection id="section4" backgroundImage={image4} speed={0.6} bgSpeed={0.25}>
      </ParallaxSection>
      <ParallaxSection id="section5" backgroundImage={image5} speed={0.7} bgSpeed={0.3}>
      </ParallaxSection>
    </ParallaxContainer>
  );
}

export default Ha
