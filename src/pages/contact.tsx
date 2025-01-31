import React from 'react'

const contact = () => {
    return (
        <div>
          <h1>Contact Us</h1>
          <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
    );
}

export default contact