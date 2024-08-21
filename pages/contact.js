import JoinUs from '../components/JoinUs';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
const Contact = () => {
  return (
    <>
<SEO
  title="Contact - Nogorful"
  description="Enhancing the lives of underprivileged and street children to become the 'Nogorful' (Flower of City)."
  keywords="organization, mission, initiatives, community involvement"
  image="https://nogorful.org/assets/images/nf/logo.jpg"
/>


      <PageHeader title="Contact Us" breadcrumb="Contact" />

      {/* Contact Page Start */}
      <section className="contact-page">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Contact With Us</span>
            <h2 className="section-title__title">We Love to Hear From Our <br /> Happy Customers</h2>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact-page__left">
                <p className="contact-page__text">
                  If you have any questions or need further information, feel free to reach out to us. We’re here to assist you with any inquiries or support you may need.
                </p>
                <div className="contact-page__contact-info">
                  <ul className="contact-page__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-chat"></span>
                      </div>
                      <div className="text">
                        <p>Call Anytime</p>
                        <a href="tel:+929668880000" aria-label="Call Halpes">92 666 888 0000</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-message"></span>
                      </div>
                      <div className="text">
                        <p>Send Email</p>
                        <a href="mailto:needhelp@company.com" aria-label="Send an email to Halpes">needhelp@company.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-address"></span>
                      </div>
                      <div className="text">
                        <p>Visit Office</p>
                        <h5>80 Brooklyn Golden Street</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact-page__form">
                <form action="/api/contact" method="post" className="contact-page__main-form contact-form-validated">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-page__input-box">
                        <input type="text" placeholder="Your Name" name="name" required aria-label="Your Name" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page__input-box">
                        <input type="email" placeholder="Email Address" name="email" required aria-label="Email Address" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page__input-box">
                        <input type="text" placeholder="Subject" name="subject" required aria-label="Subject" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-page__input-box">
                        <input type="text" placeholder="Phone Number" name="phone" required aria-label="Phone Number" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-page__input-box">
                        <textarea name="message" placeholder="Write your message" required aria-label="Message"></textarea>
                      </div>
                      <button type="submit" className="thm-btn contact-page__btn">
                        <i className="fas fa-arrow-circle-right"></i> Send a Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JoinUs />    </>
  );
};

export default Contact;
