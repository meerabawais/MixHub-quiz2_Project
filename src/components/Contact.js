import React from "react";
function Contact() {
  function handleSubmit(e) {
  e.preventDefault(); 
  alert("Your response has been successfully submitted");
  e.target.reset(); 
    }
    return (
        <div style={{minHeight: '100vh', padding: '10px' }}>
            <img src='https://www.shutterstock.com/image-photo/website-page-contact-us-email-600nw-1958537320.jpg' alt="contactus" width="100%" height="150px"></img>
            <h1 style={{ textAlign: 'center', fontSize: '40px', color:'rgba(226, 148, 31, 1)' }}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center', border: 'none', margin: '10px 262px 60px 263px', backgroundColor: 'burlywood', borderRadius: '10px', padding: '5px 0px'}}>
                <input style={{padding: '10px 120px 10px 0px', backgroundColor: 'white'}} type="text" placeholder="Enter your Name..." required></input>
                <br></br>
                <br></br>
                <input style={{padding: '10px 120px 10px 0px'}} type="email" placeholder="Enter your Email..." required></input>
                <br></br>
                <br></br>
                <textarea style={{padding: '10px 120px 10px 0px'}} placeholder="Enter your Message..." required></textarea>
                <br></br>
                <br></br>
                <button style={{padding: '10px'}} type="submit">Submit</button>
                <br></br>
                <br></br>
            </form>
             <footer style={{ backgroundColor:'burlywood',color:'ActiveBorder',textAlign: 'center',
    padding: '15px', marginTop: '60px',position: 'relative',width: '100%'}}>
     © 2025 MixHUB. All rights reserved.
    </footer>
        </div>
    );
}
export default Contact;