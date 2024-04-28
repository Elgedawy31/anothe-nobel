import "./ContactUP.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";

function ContactUs() {
  return (
    <div className="contact">
      <NavBar />
      <div className="container">
        <h1>Contact US</h1>
        <form action=""  data-aos="zoom-in">
          <p>
            Thank you for visiting Greenheck.com. Please share your information
            below and we will gladly respond to your request.
          </p>
          <div className="parent_input">
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Last  Name"/>
          </div>
          <div className="parent_input">
              <input type="nuber" placeholder="Phone"/>
              <input type="text" placeholder="country"/>
              <input type="email" placeholder="Email"/>
          </div>
          <div className="parent_input">
              <textarea name="" id="" placeholder="Message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
