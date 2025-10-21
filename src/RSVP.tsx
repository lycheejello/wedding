import './RSVP.css'
import peaksToPromises from '@/assets/peaks-to-promises.png'

function RSVP() {
  return (
    <div id="rsvp-page">
      <div id="rsvp-form-container">
        <div className="rsvp-image-container">
          <img src={peaksToPromises} alt="From Peaks to Promises" className="rsvp-header-image" />
        </div>
      </div>
    </div>
  )
}

export default RSVP