import './Section1.css'

import skiWindow from '@/assets/SkiWindow.png';
import nameLogo from '@/assets/Name.png';
import header from '@/assets/GraphicTop.svg';

export function Section1() {
  return (
    <div id="section1-container" className="content-container">
      <div id="header-container">
        <img id="header-img" src={header} />
        <img id="header-name" src={nameLogo} />
      </div>
      <div id="window-container">
        <img id="window" src={skiWindow} />
      </div>
      <div id="rsvp-container">
        <a href="https://partiful.com/e/mEnEf1sLrYUvrRhXnebr" target="_blank" rel="noopener noreferrer">
          <button className="tea-ceremony-button">RSVP</button>
        </a>
      </div>
    </div>
  )
  }

