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
        <p className="dateText inviteText">4 PM</p>
      </div>
    )
}

export function Info() {
  return (
    <div id="info-container">
      <p className="inviteText">MORE INFORMATION TO COME!</p>
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
