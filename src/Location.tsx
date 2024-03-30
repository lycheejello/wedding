import './Location.css'


function Location() {
    return (
      <div className="saveTheDateContainer">
        <div className="left">
            <img className="leftImg" src="https://storage.googleapis.com/wedding-web/Photo2.png" alt="Huyson-Arkina" />
        </div>
        <div className="topRight">
            <div>
                <div>
                    <p className="dateOnAt dateText">on</p>
                    <p className="dateText">JAN.</p>
                </div>
                <p className="dateText">11, 2025</p>
                <div>
                    <p className="dateOnAt dateText">at</p>
                    <p className="dateText">6 pm</p>
                </div>
            </div>
        </div>
        <div className="btmRight">
            <img className="rightImg" src="https://storage.googleapis.com/wedding-web/Photo3.png" alt="Huyson-Arkina" />
        </div>
      </div>
    )
}

export default Location
