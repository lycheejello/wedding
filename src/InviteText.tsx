import './InviteText.css'

export function Location() {
    return (
      <div id="eventLocationContainer">
        <p className="inviteText">THE LAM AND VO FAMILIES ARE THROWING A PARTY</p>
        <p className="inviteText">AT</p>
        <p className="skirball inviteText">SKIRBALL</p>
        <p className="skirball inviteText">CULTURAL CENTER</p>
        <p className="inviteText">2701 N SEPULVEDA BLVD, LOS ANGELES, CA 90049</p>
      </div>
    )
}

export function EventDate() {
    return (
      <div id="eventDateContainer">
        <p className="inviteText">ON</p>
        <p className="dateText inviteText">NOVEMBER</p>
        <p className="dateText inviteText">1ST, 2025</p>
        <p className="inviteText">AT</p>
        <p className="dateText inviteText">4 PM</p>
      </div>
    )
}


export function Info() {
  return (
    <div id="infoContainer">
      <p className="inviteText">MORE INFORMATION TO COME!</p>
    </div>
  )
}

export function PhotosText() {
  return (
    <div id="photosTextContainer">
      <p className="inviteText">THEY HAD A TEA CEREMONY</p>
      <p className="inviteText">AND IT LOOKED LIKE THIS</p>
    </div>
  )
}
