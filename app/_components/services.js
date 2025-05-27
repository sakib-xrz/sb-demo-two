/* eslint-disable @next/next/no-img-element */
import React from "react";

const services = [
  {
    title: "Website Development",
    description:
      "We design fast, functional, and conversion-driven websites tailored to specific goals",
  },
  {
    title: "Digital Marketing ",
    description:
      "We create targeted campaigns that drive real results and help your brand grow smarter online",
  },
  {
    title: "Search Engine Optimization",
    description:
      "We boost your website’s visibility with strategic keywords and content to increase traffic and long-term growth",
  },
  {
    title: "Participant Portal Development",
    description:
      "We create smart, secure portals that simplify referrals, track needs, and keep you connected in one place",
  },
  {
    title: "Business Process Setup",
    description:
      "We streamline your business with efficient workflows and digital tools for smooth operations ",
  },
  {
    title: "Analytics & Reporting ",
    description:
      "We turn data into actionable insights to help you make smarter, data-driven decisions",
  },
];

export default function Services() {
  return (
    <section className="service-two">
      <div className="service-two__shape1">
        <img
          src="https://thememxpro.com/php-template/diligent/assets/img/shape/service-two__shape1.png"
          alt="shape"
        />
      </div>
      <div className="service-two__shape2">
        <img
          src="https://thememxpro.com/php-template/diligent/assets/img/shape/service-two__shape2.png"
          alt="shape"
        />
      </div>
      <div className="service-two__shape3">
        <img
          src="https://thememxpro.com/php-template/diligent/assets/img/shape/service-two__shape3.png"
          alt="shape"
        />
      </div>
      <div className="service-two__shape4 float-bob-y">
        <img
          src="https://thememxpro.com/php-template/diligent/assets/img/shape/service-two__shape4.png"
          alt="shape"
        />
      </div>

      <div className="container">
        <div className="sec-title-two text-center sec-title-animation animation-style1">
          <h2 style={{ perspective: "400px" }}>Data-Driven Strategies</h2>
          <p>
            We provide a comprehensive and holistic solution to amplify your
            brand’s visibility, engagement, and impact across digital platforms.
            Through strategic marketing and data-driven insights, we help you
            connect with your audience, strengthen your online presence, and
            drive meaningful interactions.
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated"
              data-wow-delay={`0.${index + 1}s`}
              style={{
                visibility: "visible",
                animationDelay: `0.${index + 1}s`,
                animationName: "fadeInUp",
              }}
            >
              <div className="service-two__single">
                <div
                  className={`service-two__single-icon-box color${
                    (index % 3) + 1
                  }`}
                >
                  <span className="icon-website-design">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </span>
                </div>
                <div className="service-two__single-title-box">
                  <h3>
                    <a href="#">{service.title}</a>
                  </h3>
                </div>
                <div className="service-two__single-text-box">
                  <p>{service.description}</p>
                </div>
                <div className="overlay-btn">
                  <a href="#">
                    Learn More <span className="icon-next"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
