import { headerData } from '../data/dataStore';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <header className="main-header clearfix">
      <div 
  className="main-header__logo" 
  style={{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center', 
  }}
>
  <a 
    href="/" 
    style={{
      display: 'flex', 
      alignItems: 'center', 
      textDecoration: 'none',
    }}
  >
    <Image
      src={headerData.logoSrc}
      alt="Logo"
      width={50} // replace with your desired width
      height={50} // replace with your desired height
      style={{ marginRight: '10px' }} // space between image and text
    />
    <h2 style={{
      margin: 0,
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#222'
    }}>
      NOGORFUL
    </h2>
  </a>
</div>


        <div className="main-menu-wrapper">
          <div className="main-menu-wrapper__top">
            <div className="main-menu-wrapper__top-inner">
              <div className="main-menu-wrapper__left">
                <div className="main-menu-wrapper__left-content">
                  <div className="main-menu-wrapper__left-text">
                    <p>{headerData.welcomeMessage}</p>
                  </div>
                  <div className="main-menu-wrapper__left-email-box">
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="email">
                      <a href={`mailto:${headerData.email}`}>{headerData.email}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-menu-wrapper__right">
                <div className="main-menu-wrapper__right-social">
                  {headerData.socialLinks.map((link, index) => (
                    <a href={link.href} key={index}><i className={link.iconClass}></i></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="main-menu-wrapper__bottom">
            <nav className="main-menu">
              <div className="main-menu__inner">
              <a 
  href="#" 
  className="mobile-nav__toggler" 
  style={{
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)"
  }}
>
  <i className="fa fa-bars"></i>
</a>
<ul className="main-menu__list">
                  {headerData.menuItems.map((item, index) => (
                    <li className={item.dropdown ? 'dropdown' : ''} key={index}>
                      <a href={item.href}>{item.title}</a>
                      {item.dropdown && (
                        <ul>
                          {item.dropdown.map((subItem, subIndex) => (
                            <li className={subItem.dropdown ? 'dropdown' : ''} key={subIndex}>
                              <a href={subItem.href}>{subItem.title}</a>
                              {subItem.dropdown && (
                                <ul>
                                  {subItem.dropdown.map((subSubItem, subSubIndex) => (
                                    <li key={subSubIndex}><a href={subSubItem.href}>{subSubItem.title}</a></li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="main-menu__right">
                  <div className="main-menu__phone-contact">
                    <div className="main-menu__phone-icon">
                      <span className="icon-chat"></span>
                    </div>
                    <div className="main-menu__phone-number">
                      <p>Call Anytime</p>
                      <a href={headerData.contactNumber.href}>{headerData.contactNumber.display}</a>
                    </div>
                  </div>
                  <a href={headerData.donateButton.href} className="main-menu__donate-btn">
                    <i className={headerData.donateButton.iconClass}></i>{headerData.donateButton.text}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
      
    <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>
        <div class="mobile-nav__content">
            <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

            <div class="logo-box">
                <a href="/" aria-label="logo image">NOGORFUL</a>
            </div>
            <div class="mobile-nav__container"></div>

            <ul class="mobile-nav__contact list-unstyled">
                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:needhelp@packageName__.com">nogorful@gmail.com</a>
                </li>
                <li>
                    <i class="fa fa-phone-alt"></i>
                    <a href="tel:01904-446951">01904-446951</a>
                </li>
            </ul>
            <div class="mobile-nav__top">
                <div class="mobile-nav__social">
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-facebook-square"></a>
                    <a href="#" class="fab fa-pinterest-p"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div>
            </div>



        </div>
    </div>

<a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>
    </>
  );
};

export default Header;
