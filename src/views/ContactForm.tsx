import React from "react";
import Button from "@mui/material/Button";

const ContactForm = () => {
  return (
    <div>
      Contact
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <Button variant="outlined" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
