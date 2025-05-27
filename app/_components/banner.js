/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Banner() {
  return (
    <div className="onovo-page">
      <div className="wrapper">
        <section className="onovo-section onovo-hero">
          <div className="image">
            <video autoPlay muted loop playsInline id="heroVideo">
              <source src="assets/images/stvideo.mp4" type="video/mp4" />
            </video>
            <div className="ovrl" style={{ opacity: 0.25 }}></div>
          </div>
          <div className="container">
            <h1 className="title onovo-text-white">
              <span data-splitting data-onovo-scroll>
                Unlock Your <br />
                Digital Potential{" "}
                <span className="onovo-sep word">
                  <i
                    className="sep-img"
                    style={{
                      backgroundImage: "url(assets/images/title_icon.svg)",
                    }}
                  ></i>
                </span>
              </span>
            </h1>
            <div className="text">
              <div className="subtitle onovo-text-white">
                <div data-splitting data-onovo-scroll>
                  {" "}
                  Our team of experts is dedicated to maximizing your online
                  presence and driving results. Let&apos;s work together to
                  elevate your digital strategy to new heights
                </div>
              </div>
            </div>
            <a
              href="#"
              className="onovo-play-btn"
              style={{
                padding: "10px",
              }}
            >
              <span className="play-circles"></span>
              {/* <span className="play-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span> */}
              <img src="assets/images/play-btn.png" alt="play-btn" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
