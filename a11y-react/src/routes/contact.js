import React from 'react';

const Contact = () => {
    return (
        <div class="inputWrapper">
        <h1>Contact Page</h1>

            <section class="inputSection">
            <input type="text" placeholder="First name.." />
            <input type="text" placeholder="Last name.." />
            <input type="email" placeholder="Type your e-mail.." />
            <button class="submitButton">Submit</button>
            </section>
        </div>
    )
}

export default Contact;