import './Hero.css'

function Countdown() {

  const weddingDate = new Date("01/11/2025");
  const today = new Date();
  const diff = weddingDate.getTime() - today.getTime();
  const daysLeft = Math.round(diff / (1000 * 3600 * 24));

  return (
    <div className="countdown">
      <p className="daysLeft">{daysLeft}</p>
      <p className="days">DAYS TO GO</p>
    </div>
  )
}

function Hero() {
    return (
      <div className="hero">
        <div className="videoMask">
            <img src="https://storage.googleapis.com/wedding-web/wedding-date-3.gif" alt="1/11/2025" />
        </div>
        <Countdown />
      </div>
    )
}

export default Hero
