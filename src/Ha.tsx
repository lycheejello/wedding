import './Ha.css'

import ParallaxContainer from './ParallaxContainer';
import ParallaxSection from './ParallaxSection';
import bgSki from '@/assets/BGSki.jpg'; // Import your images
import bg2 from '@/assets/GraphicMid1.svg';
import bg4 from '@/assets/GraphicMid2.svg';

function Ha() {
  return (
    <ParallaxContainer>
      <ParallaxSection
        id="section1"
        backgroundImage={bgSki}
        speed={0.3}
        bgSpeed={0.3}
        z={0}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section2" 
        backgroundImage={bg2} 
        speed={0.05} 
        bgSpeed={0.05}
        z={1}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section3" 
        speed={0.3} 
        bgSpeed={0.3}
        z={0}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section4" 
        backgroundImage={bg4} 
        speed={0.3} 
        bgSpeed={0.3}
        z={1}
      >
      </ParallaxSection>
      <ParallaxSection 
        id="section5"  
        speed={0.0} 
        bgSpeed={0.0}
        z={0}
      >
      </ParallaxSection>
    </ParallaxContainer>
  );
}

export default Ha
