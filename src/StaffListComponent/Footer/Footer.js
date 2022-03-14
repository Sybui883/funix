import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer bg-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-7 col-sm-5 my-3">
              <h5>Our Address</h5>
              <address>
                121, Clear Water Bay Road
                <br />
                Clear Water Bay, Kowloon
                <br />
                HONG KONG
                <br />
                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
                <br />
                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
                <br />
                <i className="fa fa-envelope fa-lg"></i>:{" "}
                <a href="mailto:confusion@food.net">@funix.edu.vn</a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google mx-1"
                  href="http://google.com/+"
                  title="google+"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-facebook mx-1"
                  href="http://www.facebook.com/profile.php?id="
                  title="facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin mx-1"
                  href="http://www.linkedin.com/in/"
                  title="linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-twitter mx-1"
                  href="http://twitter.com/"
                  title="twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-google mx-1"
                  href="http://youtube.com/"
                  title='youtube'
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto"></div>
          </div>
        </div>
      </div>
    );
  }
}
