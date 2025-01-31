'use client';

export default function ContactForm() {
  

  return (
    <form  data-netlify="true">
      <label>
        Name:
        <input
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          required
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
