import './Maps.css'

function Maps() {
    return (
    <body>
    <div class="MapsContainer">
        <h2>Itinerary</h2>

        <table role="table" aria-label="Wedding Day Schedule">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Event</th>
                    <th scope="col">Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Jan 10, Friday</b></td>
                    <td>03:30 PM</td>
                    <td>Rehearsal</td>
                    <td>For the family.<br /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>06:00 PM</td>
                    <td>Welcome Dinner</td>
                    <td>Welcome dinner at the Quán Bụi.<br />
                        <span class="notes">Dress Code: Casual</span>
                    </td>
                </tr>
                <tr>
                    <td><b>Jan 11, Saturday</b></td>
                    <td>06:00 AM</td>
                    <td>Meet and Photos</td>
                    <td>Family will meet at <b>Sheraton Lobby</b> for photos<br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>06:15 AM</td>
                    <td>All Guests depart from Myst</td>
                    <td>Don't miss the bus!</td>
                </tr>
                <tr>
                    <td></td>
                    <td>06:30 AM</td>
                    <td>Family to departs from Sheraton</td>
                    <td>Don't leave Huyson behind.</td>
                </tr>
                <tr>
                    <td></td>
                    <td>08:00 AM</td>
                    <td>Tea Ceremony</td>
                    <td>Tea ceremony at the bride's house in the outskirts of the city in Củ Chi.<br />
                        Following the ceremony is a light brunch of traditional Vietnamese food.<br />
                        <span class="notes">Dress Code: Semi Formal, Ao Dai</span><br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>06:00 PM</td>
                    <td>Cocktail hour</td>
                    <td>GEM Center. Free flow beer.<br />
                        <span class="notes">Dress Code: Cockail, Ao Dai</span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>07:00 PM</td>
                    <td>Reception Begins</td>
                    <td>First Dance, Toasts, Live Music and Prizes!<br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>9:30 PM</td>
                    <td>After Party at Warning Zone mPlaza!</td>
                    <td>Beer and snacks.<br />
                        <span class="notes">Transportation to/from the venue will be provided from Gem Center.</span>
                    </td>
                </tr>
                <tr>
                    <td><b>Jan 12, Sunday</b></td>
                    <td></td>
                    <td>Food Tour</td>
                    <td>Food, Cafes, small bites. </td>
                </tr>

                <tr>
                    <td></td>
                    <td>10:00 AM ish</td>
                    <td>Phở?</td>
                    <td>Let me know when you're up.<br />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>2:00 PM</td>
                    <td>Cà phê trứng class</td>
                    <td>Learn how to make Egg Coffee!<br />
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>6:00 PM</td>
                    <td>Noir: Dining in the dark</td>
                    <td>Pitch black dining room. Blind staff.<br />
                    </td>
                </tr>


            </tbody>
        </table>

        <div>
            <h2>Welcome Dinner</h2> 
            <h3>Quán Bụi</h3>
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=222%20-%20224%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n,%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Th%C3%A0nh,%20Qu%E1%BA%ADn%201,%20H%E1%BB%93%20Ch%C3%AD%20Minh%2070000,%20Vietnam+(Welcome%20Dinner%20at%20Qu%C3%A1n%20B%E1%BB%A5i)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div>
            <h2>Tea Ceremony</h2> 
            <h3>Brides's house at Củ Chi</h3> 
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=328%20HL2,%20phuoc%20vinh%20an,%20cu%20chi+(Bride's%20house)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div>
            <h2>Reception</h2> 
            <h3>GEM center</h3> 
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=8%20%C4%90.%20Nguy%E1%BB%85n%20B%E1%BB%89nh%20Khi%C3%AAm,%20%C4%90a%20Kao,%20Qu%E1%BA%ADn%201,%20H%E1%BB%93%20Ch%C3%AD%20Minh,%20Vietnam+(GEM%20center)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div>
            <h2>Afterparty</h2> 
            <h3>Warning Zone mPlaza</h3> 
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=39%20L%C3%AA%20Du%E1%BA%A9n,%20B%E1%BA%BFn%20Ngh%C3%A9,%20Qu%E1%BA%ADn%201,%20H%E1%BB%93%20Ch%C3%AD%20Minh%20700000+(Warning%20Zone%20mPlaza)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
        </div>

    </div>

    </body>

    )
}

export default Maps
