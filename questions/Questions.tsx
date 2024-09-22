import './Questions.css'

function Questions() {
    return (
    <main>
        <h1>So you've got questions</h1>

        <section text-labelledby="dress-code-weather">
            <h2 id="dress-code-weather">What's the dress code for the Reception and Tea Ceremony?</h2>
            <p>Semi-Formal. We'll be in Ao Dai. Let us know if you want help shopping. Think Ao Dai, Maxi Dresses, Jumpsuits, button up shirt, blazer optional. It's gonna be hot and humid.</p>
        </section>

        <section>
            <h2>Tea Ceremony? Am I Invited?</h2>
            <p>Yes! Let me know if you've got other plans. Semi Formal. Food provided.</p>
        </section>

        <section >
            <h2>Hows the weather?</h2>
            <p>It's gonna be hot and humid.</p>
        </section>


        <section text-labelledby="visa">
            <h2 id="visa">Do I need a visa for Vietnam?</h2>
            <p>Yup. Let us know if you'd like help with this.</p>
        </section>

        <section text-labelledby="transportation">
            <h2 id="transportation">How do I get around?</h2>
            <p>We'll arrange transport from downtown to the tea ceremony. We suggest that you stay closeby to the reception. For everythign else, use Grab.</p>
        </section>

        <section text-labelledby="hotel-booking">
            <h2 id="hotel-booking">What hotel should I book?</h2>
            <p>We are staying at the JW Marriott, with the group code XXXXX. If you choose to stay at a different hotel, there are a number of decent hotels by the wedding venue. </p>
        </section>

        <section text-labelledby="apps-download">
            <h2 id="apps-download">What apps should I download?</h2>
            <p><strong>Zalo</strong> - Messaging app of choice in Vietnam. We'll be communicating over this, so please download it!</p>
            <p><strong>Grab</strong> - rideshare and food delivery. Accepts Cash. You can choose a Grab taxi for up to 3 or a Grab bike for 1.</p>
        </section>

        <section>
            <h2>What's all this about a food tour?</h2>
            <p>We'll have a car and roam around to different spots to eat and see the city.</p>
        </section>
    </main>
    )
}

export default Questions
