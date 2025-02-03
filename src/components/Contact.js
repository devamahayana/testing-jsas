// pages/contact.js
export default function Contact() {
    return (
      <div>
        <h1>Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Email: <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }