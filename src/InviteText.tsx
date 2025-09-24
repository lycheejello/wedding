import './InviteText.css'

export function Location() {
    return (
      <div id="event-location-container">
        <div className="mobile-text">
        <p className="inviteText">THE LAM AND VO FAMILIES</p>
        <p className="inviteText">ARE THROWING A PARTY</p>
      </div>
        <div className="desktop-text">
        <p className="inviteText">THE LAM AND VO FAMILIES ARE THROWING A PARTY</p>
      </div>
        <p className="inviteText">AT</p>
        <p className="skirball inviteText">SKIRBALL</p>
        <p className="skirball inviteText">CULTURAL CENTER</p>
        <div className="mobile-text">
       </div>
        <div className="desktop-text">
          <p className="inviteText">2701 N SEPULVEDA BLVD, LOS ANGELES, CA 90049</p>
      </div>

        </div>
    )
}

export function EventDate() {
    return (
      <div id="event-date-container">
        <p className="inviteText sm">ON</p>
        <p className="dateText inviteText">NOVEMBER</p>
        <p className="dateText inviteText">1ST, 2025</p>
        <p className="inviteText sm">AT</p>
        <p className="dateText inviteText">3:30 PM</p>
      </div>
    )
}

export function Info() {
  return (
    <div id="info-container">
      <div className="hotel-section">
        <p className="inviteText closest">CLOSEST TO WEDDING VENUE:</p>
        <p className="inviteText hotel">W HOTEL</p>
        <p className="inviteText hotel-address">930 HILGARD AVE, LOS ANGELES, CA 90024</p>
        <p className="inviteText hotel">COURTYARD SHERMAN OAKS</p>
        <p className="inviteText hotel-address">15433 VENTURA BLVD, SHERMAN OAKS, CA 91403</p>
      </div>

      <div className="hotel-section">
        <p className="inviteText closest">CLOSE TO SANTA MONICA BEACH:</p>
        <p className="inviteText hotel">PROPER HOTEL</p>
        <p className="inviteText hotel-address">700 WILSHIRE BLVD, SANTA MONICA, CA 90401</p>
        <p className="inviteText hotel">SANDBOURNE</p>
        <p className="inviteText hotel-address">1740 OCEAN AVE, SANTA MONICA, CA 90401</p>
      </div>

      <div className="hotel-section">
        <p className="inviteText closest">CLOSE TO HOLLYWOOD:</p>
        <p className="inviteText hotel">WALDORF ASTORIA BEVERLY HILLS</p>
        <p className="inviteText hotel-address">9850 WILSHIRE BLVD, BEVERLY HILLS, CA 90210</p>
        <p className="inviteText hotel">THE WEST HOLLYWOOD EDITION</p>
        <p className="inviteText hotel-address">9040 W SUNSET BLVD, WEST HOLLYWOOD, CA 90069</p>
      </div>
    </div>
  )
}

export function PhotosText() {
  return (
    <div id="photos-text-container">
      <p className="inviteText">THEY HAD A TEA CEREMONY</p>
      <p className="inviteText">AND IT LOOKED LIKE THIS</p>
    </div>
  )
}
