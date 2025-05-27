const Footer = () => {
  return (
    <footer className="onovo-footer footer--dark">
      <div className="footer--default">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
              {/* Copyright */}
              <div className="copyright onovo-text-white">
                © 2025 StrategyByte by{" "}
                <a
                  href="https://bslthemes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="onovo-lnk lnk--white"
                >
                  StrategyByte Team
                </a>
                . All rights reserved.
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">
              {/* Social */}
              <div className="onovo-social-1 onovo-social-active">
                <ul>
                  <li>
                    <a
                      className="onovo-social-link onovo-hover-2"
                      href="http://twitter.com"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="onovo-social-link onovo-hover-2"
                      href="http://linkedin.com"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="onovo-social-link onovo-hover-2"
                      href="http://dribbble.com"
                      title="Dribbble"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
