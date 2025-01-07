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
                    <th scope="col">Item</th>
                    <th scope="col">Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jan 10, Friday</td>
                    <td>06:00 PM</td>
                    <td>Welcome Dinner</td>
                    <td>Welcome dinner at the heart of Ho Chi Minh City.<br />
                        <span class="notes">Dress Code: Conservative Semi-Formal, Ao dai</span>
                    </td>
                </tr>
                <tr>
                    <td>Jan 11, Saturday</td>
                    <td>07:00 AM</td>
                    <td>Tea Ceremony</td>
                    <td>Tea ceremony at the bride's house in the outskirts of the city.<br />
                        Following the ceremony is a light brunch of traditional Vietnamese food.<br />
                        <span class="notes">Dress Code: Semi Formal, Ao Dai</span><br />
                        Transportation to/from the venue will be provided from select hotels in downtown!
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>06:00 PM</td>
                    <td>Reception Dinner</td>
                    <td>Gem Center. Bottomless Beer, 2.5 hours <br />
                        <span class="notes">Dress Code: Semi Formal, Ao Dai</span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>10:00 PM</td>
                    <td>After Party / Nhậu</td>
                    <td>Beer garden that overlooks the city. Grill, seafood. Drinks.<br />
                        Transportation to/from the venue will be provided from Gem Center.
                    </td>
                </tr>
                <tr>
                    <td>Jan 12, Sunday</td>
                    <td></td>
                    <td>Food Tour</td>
                    <td>We are inviting our guests to join us for a food tour focusing on Vietnamese cuisine.</td>
                </tr>
            </tbody>
        </table>

        <div>
            <h2>Welcome Dinner</h2> 
            <h3>Mạ Quán</h3>
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=222%20-%20224%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n,%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Th%C3%A0nh,%20Qu%E1%BA%ADn%201,%20H%E1%BB%93%20Ch%C3%AD%20Minh%2070000,%20Vietnam+(Welcome%20Dinner%20at%20Qu%C3%A1n%20B%E1%BB%A5i)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div>
            <h2>Tea Ceremony</h2> 
            <h3>Brides's house</h3> 
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=328%20HL2,%20phuoc%20vinh%20an,%20cu%20chi+(Bride's%20house)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div>
            <h2>Reception</h2> 
            <h3>GEM center</h3> 
            <iframe width="100%" height="800" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=8%20%C4%90.%20Nguy%E1%BB%85n%20B%E1%BB%89nh%20Khi%C3%AAm,%20%C4%90a%20Kao,%20Qu%E1%BA%ADn%201,%20H%E1%BB%93%20Ch%C3%AD%20Minh,%20Vietnam+(GEM%20center)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

    </div>

    </body>

    )
}

export default Maps
