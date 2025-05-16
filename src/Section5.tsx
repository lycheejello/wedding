import './Section5.css'
import { Info } from './InviteText';
import Logo from '@/assets/Logo.svg';
import Footer from '@/assets/GraphicBottom.svg';
import Heart from '@/assets/SkiHeartC.png';

export function Section5() {
  return (
    <div id="section5-container" className="content-container">
        <Info />
        <img src={Heart} id="heart-img"/>
        <div id="footer-container">
          <img id="footer-img" src={Footer} />
          <img src={Logo} id="footer-logo"/>
        </div>
    </div>
  )
}
