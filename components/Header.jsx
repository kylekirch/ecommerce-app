function Header() {
  return (
      <>
      <div className="header-container">

        <div className="header-section-sub" id="logo-items">
          <a href="#" className="icon" id="logo-icon"></a>
        </div>

        <div className="header-section-main" id="redirect-items">
          <a href="#" className="banner-button" id="browse-button"><p>Browse</p></a>
          <a href="#" className="banner-button" id="icon-button">
            <p id="home"/>
          </a>
          <a href="#" className="banner-button" id="icon-button">
            <p id="cart"/>
          </a>
          <a href="#" className="banner-button" id="orders-button"><p>Mont</p></a>
        </div>

        <div className="header-section-sub" id="user-info-items">
          <a href="#" className="username-link"><p>User</p></a>
          <a href="#" className="icon" id="user-icon"></a>
          <a href="#" id="login-link"><p>Log in</p></a>
          
        </div>

      </div>
      </>
    );
}

export default Header;