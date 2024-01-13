import './App.css'

function Countdown() {

  const weddingDate = new Date("01/11/2025");
  const today = new Date();
  const diff = weddingDate.getTime() - today.getTime();
  const daysLeft = Math.round(diff / (1000 * 3600 * 24));

  return (
    <div>
      <p className="countdown">{daysLeft}</p>
      <p className="days">DAYS</p>
    </div>
  )
}

function App() {
    return (
      <>
        <div className="videoMask">
          <video className="video" autoPlay muted loop playsInline>
            <source src="https://storage.googleapis.com/wedding-web/wedding-date.MOV" type="video/mp4"/>
          </video>
        </div>
        <Countdown />
      </>
    )
}

export default App
