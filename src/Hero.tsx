import './Hero.css'

function Countdown() {

  const weddingDate = new Date("01/11/2025");
  const today = new Date();
  const diff = weddingDate.getTime() - today.getTime();
  const daysLeft = Math.round(diff / (1000 * 3600 * 24));

  return (
    <div className="countdown haItem">
      <p className="daysLeft">{daysLeft}</p>
      <p className="days">days to go</p>
    </div>
  )
}

function Hero() {
    return (
      <div className="heroContainer">
        <div className="hero">
          <div className="hero-1 heroItem"/>
          <div className="heroImgContainer heroItem">
            <img className="logo" src="https://storage.googleapis.com/wedding-web/Logo160.png" alt="Huyson-Arkina" />
            <img className="heroImg" src="https://storage.googleapis.com/wedding-web/Photo1_500.png" alt="1/11/2025" />
          </div>
          <div className="title heroItem">
            <div className="ha">
                <div className="haTitle haItem">
                    <img className="haPng" src="https://storage.googleapis.com/wedding-web/Name2.png" alt="Huyson and Arkina"/>
                    <p className="getMarried">are getting married</p>
                </div>
                <Countdown />
            </div>
          </div>
      </div>


    <div className="graphicContainer">
        <picture>
            <img className="graphic" src="https://storage.googleapis.com/wedding-web/Graphic1_1.png" />
        </picture>
    </div>


      </div>
    )
}

export default Hero
