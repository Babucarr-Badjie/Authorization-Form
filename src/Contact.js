import React, { useState } from "react";

function Contact() {
  const password = "babucarr123";
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(event) {
    const enteredPassword = event.target.querySelector(
      'input[type="password"]'
    ).value;

    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  const loginForm = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" required></input>
      <br />
      <button>Submit</button>
    </form>
  );

  const contactInfo = (
    <ul>
      <li>babucarr.badjie12@gmail.com</li>
      <li>+886 0978141935</li>
    </ul>
  );

  return (
    <div id="authorization">
      <h1>{authorized ? "Contact Us" : "Enter the Password"}</h1>
      {authorized ? contactInfo : loginForm}
    </div>
  );
}

export default Contact;
