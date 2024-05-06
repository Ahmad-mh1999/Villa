import './ContactFormSM.css'

function ContactFormSM() {
  return (
    <form className='contact-form-sm'>
        <div className="rwo">
            <div className="col-lg-12">
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name='name' placeholder='Your Name...' />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name='email' placeholder='Your Email...' />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name='subject' placeholder='Subject...' />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name='message' rows={4} placeholder='Your Message...' />
                </div>
            </div>
            <div className="col-lg-12">
                <button type='submit' className='form-button-sm'>Send Message</button>
            </div>
        </div>
    </form>
  )
}

export default ContactFormSM