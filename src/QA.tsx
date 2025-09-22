import './QA.css'

function QAHotels() {
  return (
    <div id="qa-hotels-container">
      <h1 className="qa-header-1">Hotels</h1>
      <div className="qa-hotel-section">
        <p className="qa-hotel-name">W Hotel</p>
        <p className="qa-hotel-address">930 Hilgard Ave, Los Angeles, CA 90024</p>
        <p className="qa-hotel-name">Courtyard Sherman Oaks</p>
        <p className="qa-hotel-address">15433 Ventura Blvd, Sherman Oaks, CA 91403</p>
      </div>

      <div className="qa-hotel-section">
        <p className="qa-hotel-name">Proper Hotel</p>
        <p className="qa-hotel-address">700 Wilshire Blvd, Santa Monica, CA 90401</p>
        <p className="qa-hotel-name">Sandbourne</p>
        <p className="qa-hotel-address">1740 Ocean Ave, Santa Monica, CA 90401</p>
      </div>

      <div className="qa-hotel-section">
        <p className="qa-hotel-name">Waldorf Astoria Beverly Hills</p>
        <p className="qa-hotel-address">9850 Wilshire Blvd, Beverly Hills, CA 90210</p>
        <p className="qa-hotel-name">The West Hollywood Edition</p>
        <p className="qa-hotel-address">9040 W Sunset Blvd, West Hollywood, CA 90069</p>
      </div>
    </div>
  )
}

function QA() {
  return (
    <div id="qa-page">
      <div id="qa-text-container">
        <h1 className="qa-header-1">Important Information</h1>
        <p className="qa-paragraph">The ceremony will be held outdoor in <strong>Skirball's courtyard</strong> with the reception to follow in the <strong>Ballroom indoors</strong>.</p>
        <p className="qa-paragraph">Guests are invited to arrive at <strong>3:30pm</strong>. Please allow enough time to park and account for traffic. The ceremony will begin promptly at <strong>4:00pm</strong>.</p>

        <h1 className="qa-header-1">Attire</h1>
        <h2 className="qa-header-2"><strong>Garden Formal</strong></h2>
        <p className="qa-paragraph-same-size"><strong>Patterns and colors encouraged.</strong></p>

        <h1 className="qa-header-1">Menu</h1>
        <p className="qa-paragraph">Please select your meal choice when you RSVP. If you or your guest have any allergies or dietary restrictions, please note them so we can accommodate you.</p>

        <p className="qa-paragraph"><strong>Belgian Chimay Ale Braised Boneless Short Ribs</strong> with Walnut Mustard Sauce and Seasonal Vegetables</p>

        <p className="qa-paragraph"><strong>Baked Branzino Fillet</strong> with Blistered Heirloom Cherry Tomatoes and Capers, Lemon Basil Garlic Orzo with Riced Vegetables</p>

        <p className="qa-paragraph"><strong>Broccoli Tofu Cake</strong> on Roasted Spaghetti Squash with Tomatillo Sauce (Vegan, Gluten-Free)</p>

        <QAHotels />
      </div>
    </div>
  )
}

export default QA