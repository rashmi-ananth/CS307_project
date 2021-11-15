import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Some fields are missing!");
    }
  };

  return (
    <div id="contact-form">
      <input
        type="text"
        placeholder="Name "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit}>Send</button>
    </div>
  );
};

export default Contact;
