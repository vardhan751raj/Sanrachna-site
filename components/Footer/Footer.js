import React from "react";
import style from "./index.module.scss";

const index = ({ scrollToSection }) => {
  return (
    <section className={style.footer} id="footer">
      <div className={style.div}>
        <div className={style.content}>
          <img
            src="/images/logo.jpeg"
            placeholder="logo"
            className={style.img}
            // style={{ width: "40%" }}
          />
          <div className={style.ul}>
            <p
              className={style.p}
              onClick={() => {
                scrollToSection("home");
              }}
            >
              Home
            </p>
            <p
              className={style.p}
              onClick={() => {
                scrollToSection("about");
              }}
            >
              About Us
            </p>
            <p
              className={style.p}
              onClick={() => {
                scrollToSection("project");
              }}
            >
              Project
            </p>
            <p
              className={style.p}
              onClick={() => {
                scrollToSection("team");
              }}
            >
              Our Team
            </p>
            <p
              className={style.p}
              onClick={() => {
                scrollToSection("testimonial");
              }}
            >
              Tetsimonial
            </p>
            <p
              className={style.p}
              onClick={() => {
                scrollToSection("mail");
              }}
            >
              Contact Us
            </p>
          </div>

          <div className={style.ul}>
            <div style={{ display: "flex", gap: "1.1rem" }}>
              <img
                src="/images/mail.png"
                // style={{ width: "2.5rem" }}
                className={style.icon}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <p className={style.p}>sanrachna.co@gmail.com</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                src="/images/smartphone.png"
                // style={{ width: "2.5rem" }}
                className={style.icon}
              />

              <div style={{ display: "flex", alignItems: "center" }}>
                <p className={style.p}>9005262627, 9810273848</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                src="/images/pin.png"
                // style={{ width: "2.5rem" }}
                className={style.icon}
              />

              <div style={{ display: "flex", alignItems: "center" }}>
                <p className={style.p}>
                  Sikka Karmik Greens, Sector-78
                  <br></br>
                  Noida
                </p>
              </div>
            </div>

            <div className={style.social}>
              <a target="_blank" href="www.twitter.com">
                <img
                  src="/images/instagram.png"
                  // style={{ width: "3rem" }}
                  className={style.socialLink}
                />
              </a>

              <a target="_blank" href="www.linkedin.com">
                <img
                  src="/images/fb.png"
                  // style={{ width: "3rem" }}
                  className={style.socialLink}
                />
              </a>
            </div>
          </div>
        </div>
        <p className={style.copyright}>&copy; 2023 Sanrachna Construction </p>
      </div>
    </section>
  );
};

export default index;
