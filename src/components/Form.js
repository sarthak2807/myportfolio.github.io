import "./Formstyles.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formsubmit.co/sarthakguptasg929869@gmail.com" method="POST">
            <label>Your Name</label>
            <input type="text" name="Name" required/>
            <label>Email</label>
            <input type="email" name="Email" required></input>
            <label>Subject</label>
            <input type="text" name="Subject" required></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your message here" name="Message" required/>
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form;