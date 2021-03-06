import React from "react";
import { FaYoutube, FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <footer class="page-footer font-small mdb-color lighten-3 pt-4 dark">
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">
                Footer Content
              </h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum.
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none"></hr>

            <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">About</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <a href="#!">PROJECTS</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">ABOUT US</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">BLOG</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">AWARDS</a>
                  </p>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none"></hr>

            <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <i class="fas fa-home mr-3"></i> Kaushalam Digital Pvt Ltd
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> kaushalam@example.com
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none"></hr>

            <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
              <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>
              <div classname="icons">
                <a
                  type="button"
                  class="btn-floating btn-fb"
                  href="www.facebook.com"
                >
                  <i class="fab fa-facebook-f">
                    <FaFacebook color="blue" size={25} />
                  </i>
                </a>

                <a type="button" class="btn-floating btn-tw">
                  <i class="fab fa-twitter">
                    <FaTwitter color="skyblue" size={25} />
                  </i>
                </a>

                <a type="button" class="btn-floating btn-gplus">
                  <i class="fab fa-google-plus-g">
                    <FaGooglePlus color="red" size={25} />
                  </i>
                </a>

                <a type="button" class="btn-floating btn-youtube">
                  <i class="fab fa-youtube">
                    <FaYoutube color="red" size={25} />
                  </i>
                </a>
              </div>
            </div>

            <div class="footer-copyright text-center py-3">
              ?? 2020 Copyright:
              <a href="https://mdbootstrap.com/"> Abc.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
