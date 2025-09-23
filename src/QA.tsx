import './QA.css'

function QAHotels() {
  return (
    <div id="qa-hotels-container">
      <h1 className="qa-header-1">Hotels</h1>

      <div className="hotel-item">
        <h3 className="hotel-name">W Hotel</h3>
        <p className="hotel-address">930 Hilgard Ave, Los Angeles, CA 90024</p>
      </div>

      <div className="hotel-item">
        <h3 className="hotel-name">Courtyard Sherman Oaks</h3>
        <p className="hotel-address">15433 Ventura Blvd, Sherman Oaks, CA 91403</p>
      </div>

      <div className="hotel-item">
        <h3 className="hotel-name">Proper Hotel</h3>
        <p className="hotel-address">700 Wilshire Blvd, Santa Monica, CA 90401</p>
      </div>

      <div className="hotel-item">
        <h3 className="hotel-name">Sandbourne</h3>
        <p className="hotel-address">1740 Ocean Ave, Santa Monica, CA 90401</p>
      </div>

      <div className="hotel-item">
        <h3 className="hotel-name">Waldorf Astoria Beverly Hills</h3>
        <p className="hotel-address">9850 Wilshire Blvd, Beverly Hills, CA 90210</p>
      </div>

      <div className="hotel-item">
        <h3 className="hotel-name">The West Hollywood Edition</h3>
        <p className="hotel-address">9040 W Sunset Blvd, West Hollywood, CA 90069</p>
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

        <div className="menu-item">
          <h3 className="dish-name">Belgian Chimay Ale Braised Boneless Short Ribs</h3>
          <p className="dish-description">with Walnut Mustard Sauce and Seasonal Vegetables</p>
        </div>

        <div className="menu-item">
          <h3 className="dish-name">Baked Branzino Fillet</h3>
          <p className="dish-description">with Blistered Heirloom Cherry Tomatoes and Capers, Lemon Basil Garlic Orzo with Riced Vegetables</p>
        </div>

        <div className="menu-item">
          <h3 className="dish-name">Broccoli Tofu Cake</h3>
          <p className="dish-description">on Roasted Spaghetti Squash with Tomatillo Sauce (Vegan, Gluten-Free)</p>
        </div>

        <QAHotels />
      </div>
    </div>
  )
}

export default QA