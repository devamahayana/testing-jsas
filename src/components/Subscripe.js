// pages/contact.js
export default function Subscripe() {
   
      return (
        <div>
          <h1>Contact Us</h1>
          <form 
            name="subscripe" method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field">
              
            <input type="hidden" name="form-name" value="subscripe" />
        
            <div style={style.marginTop}>
              <label>
                Email: <input type="email" name="email" style={style.textBlack}/>
              </label>
            </div>
           
            <div style={style.marginTop}>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      );
    }