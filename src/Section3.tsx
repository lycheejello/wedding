import './Section3.css'
import { EventDate } from './InviteText';
import SkiMid from '@/assets/SkiMidC.png';

export function Section3() {
  return (
    <div id="section3-container" className="content-container">
      <img src={SkiMid} id="section3-img" />
      <EventDate />
    </div>
  )
  }

