import './Section5.css'
import Logo from '@/assets/Logo.svg';
import Footer from '@/assets/GraphicBottom.svg';
import Heart from '@/assets/SkiHeartC.png';

function ExcitedText() {
  return (
    <div id="excited-text-container">
      <p className="inviteText">SEE YOU AT THE STRAWBERRIES!</p>
    </div>
  )
}

export function Section5() {
  return (
    <div id="section5-container" className="content-container">
        <ExcitedText />
        <img src={Heart} id="heart-img"/>
        <div id="footer-container">
          <img id="footer-img" src={Footer} />
          <img src={Logo} id="footer-logo"/>
        </div>
    </div>
  )
}
