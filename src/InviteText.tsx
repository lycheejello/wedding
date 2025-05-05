import './InviteText.css'

export function Location() {
    return (
      <div className="locationContainer">
        <p className="inviteText">THE LAM AND VO FAMILIES ARE THROWING A PARTY</p>
        <p className="inviteText">AT</p>
        <p className="skirball inviteText">SKIRBALL</p>
        <p className="skirball inviteText">CULTURAL CENTER</p>
        <p className="inviteText">2701 N SEPULVEDA BLVD, LOS ANGELES, CA 90049"</p>
      </div>
    )
}

export function EventDate() {
    return (
      <div className="eventDateContainer">
        <p className="inviteText">ON</p>
        <p className="dateText inviteText">NOVEMBER</p>
        <p className="dateText inviteText">1ST, 2025</p>
        <p className="inviteText">AT</p>
        <p className="dateText inviteText">4 PM</p>
      </div>
    )
}

