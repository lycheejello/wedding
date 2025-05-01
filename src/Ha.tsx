import './Ha.css'

import ParallaxContainer from './ParallaxContainer';
import ParallaxSection from './ParallaxSection';
import image1 from '@/assets/image1.jpg'; // Import your images
import image2 from '@/assets/GraphicMiddle1.svg';
import image3 from '@/assets/GraphicMiddle2.svg';
import image4 from '@/assets/image1.jpg';
import image5 from '@/assets/image1.jpg';

function Ha() {
  return (
    <ParallaxContainer>
      <ParallaxSection id="section1" backgroundImage={image1} imageType="jpg" speed={0.3} bgSpeed={0.3}>
        Section 1 Content
      </ParallaxSection>
      <ParallaxSection id="section2" backgroundImage={image2} imageType="svg" speed={0.3} bgSpeed={0.1}>
        Section 2 Content
      </ParallaxSection>
      <ParallaxSection id="section3" backgroundImage={image3} imageType="svg" speed={0.5} bgSpeed={0.2}>
        Section 3 Content
      </ParallaxSection>
      <ParallaxSection id="section4" backgroundImage={image4} imageType="jpg" speed={0.6} bgSpeed={0.25}>
        Section 4 Content
      </ParallaxSection>
      <ParallaxSection id="section5" backgroundImage={image5} imageType="jpg" speed={0.7} bgSpeed={0.3}>
        Section 5 Content
      </ParallaxSection>
    </ParallaxContainer>
  );
}

export default Ha
