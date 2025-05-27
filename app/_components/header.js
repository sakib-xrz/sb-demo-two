const Header = () => {
  return (
    <header className="onovo-header header--white">
      <div className="header--builder">
        <div className="container">
          <div className="row">
            <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center">
              {/* Logo */}
              <div className="onovo-logo-image" style={{ maxWidth: "70px" }}>
                <a href="/">
                  {/* <img src="assets/images/play-btn.png" alt="Onovo" /> */}
                  <img
                    className="logo--white"
                    src="assets/images/play-btn.png"
                    alt="Onovo"
                  />
                </a>
              </div>
            </div>

            <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-6 align-self-center align-center">
              {/* Menu Hamburger */}
              <a href="/" className="onovo-menu-btn">
                <span></span>
              </a>
              <div className="onovo-menu-popup align-left">
                <div className="onovo-menu-overlay"></div>
                <div className="onovo-menu-overlay-after"></div>
                <div className="onovo-menu-container onovo--noscroll">
                  <div className="container">
                    <div className="onovo-menu">
                      <ul className="onovo-menu-nav">
                        <li className="dropdown-link current-menu-item menu-item-has-children">
                          <a
                            className="onovo-lnk lnk--active onovo-dropdown-toggle"
                            href="index.html"
                          >
                            Home
                          </a>
                          <i className="icon fas fa-chevron-down"></i>
                          <ul className="sub-menu">
                            <li className="current-menu-item">
                              <a
                                className="onovo-lnk lnk--active"
                                href="index.html"
                              >
                                Creative Agency
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="home-digital-agency.html"
                              >
                                Digital Agency
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="home-showcase.html"
                              >
                                Creative Portfolio
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="home-parallax.html"
                              >
                                Fullscreen Parallax
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-link menu-item-has-children">
                          <a
                            className="onovo-lnk lnk--active onovo-dropdown-toggle"
                            href="about-us.html"
                          >
                            About
                          </a>
                          <i className="icon fas fa-chevron-down"></i>
                          <ul className="sub-menu">
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="about-us.html"
                              >
                                About Us
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="team.html"
                              >
                                Team
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="team-detail.html"
                              >
                                Team Detail
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="services.html"
                              >
                                Services
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="service-detail.html"
                              >
                                Service Detail
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="pricing-plans.html"
                              >
                                Pricing Plans
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="faq.html"
                              >
                                FAQ
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-link menu-item-has-children">
                          <a
                            className="onovo-lnk lnk--active onovo-dropdown-toggle"
                            href="projects.html"
                          >
                            Projects
                          </a>
                          <i className="icon fas fa-chevron-down"></i>
                          <ul className="sub-menu">
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="projects.html"
                              >
                                Projects Grid
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="projects-list.html"
                              >
                                Projects List
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="projects-side.html"
                              >
                                Projects Side
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="projects-masonry.html"
                              >
                                Projects Masonry
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="projects-3-column.html"
                              >
                                Projects 3 Column
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="gallery.html"
                              >
                                Gallery
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="project-detail.html"
                              >
                                Project Detail
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-link menu-item-has-children">
                          <a
                            className="onovo-lnk lnk--active onovo-dropdown-toggle"
                            href="blog.html"
                          >
                            Blog
                          </a>
                          <i className="icon fas fa-chevron-down"></i>
                          <ul className="sub-menu">
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="blog.html"
                              >
                                Blog Grid
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="blog-list.html"
                              >
                                Blog List
                              </a>
                            </li>
                            <li>
                              <a
                                className="onovo-lnk lnk--active"
                                href="blog-detail.html"
                              >
                                Blog Detail
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="onovo-lnk lnk--active"
                            href="contact-us.html"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center align-right">
              {/* Button */}
              <a className="onovo-head-btn onovo-hover-btn" href="/">
                <span>
                  <span className="onovo-lnk lnk--active">Showcase</span>
                </span>
                <i className="arrow">
                  <span></span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
