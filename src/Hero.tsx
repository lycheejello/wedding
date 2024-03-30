import './Hero.css'

function Countdown() {

  const weddingDate = new Date("01/11/2025");
  const today = new Date();
  const diff = weddingDate.getTime() - today.getTime();
  const daysLeft = Math.round(diff / (1000 * 3600 * 24));

  return (
    <div className="countdown">
      <p className="daysLeft">{daysLeft}</p>
      <p className="days">days to go</p>
    </div>
  )
}

function Hero() {
    return (
      <div className="hero">
          <div className="heroItem"/>
          <div className="heroItem pngContainer" >
            <img className="logo" src="https://storage.googleapis.com/wedding-web/Logo160.png" alt="Huyson-Arkina" />
            <img className="png" src="https://storage.googleapis.com/wedding-web/Photo1.png" alt="1/11/2025" />
          </div>
          <div className="heroItem title">
            <div className="ha">
                <img className="png haItem" src="https://storage.googleapis.com/wedding-web/Name2.png" alt="Huyson and Arking"/>
                <p className="getMarried haItem">are getting married</p>
            </div>
          <Countdown />
          </div>
      </div>
    )
}

export default Hero
