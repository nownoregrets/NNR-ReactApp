import React from "react";
import "../Style/Home.css";
import "../App.css";
// All Components
import BlogSection from "./BlogSection";
import VideoCarousel from "./VideoCarousel";
// All Images
import HeroImage from "../Images/Learn Coding Now No Regrets.png";
import ServicesImage from "../Images/How To Make Website.jpg";
import webDevIcon from "../Images/Web Dev Icon.png";
import desingIcon from "../Images/Design Icon.png"
import rocketIcon from "../Images/Rocket Icon.png"

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero-slider d-flex">
        {/* Hero Left */}
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-white mx-5"
          id="hero-left"
        >
          <h5 id="home-subheading">Learn Coding</h5>
          <h1>Advance Your Coding Skills | Master Tools & Knowledge Today</h1>
          <p>
            Transform your skills with our comprehensive coding resources. Dive
            into our tutorials and guides designed to help you master the latest
            technologies and programming languages.
          </p>

          {/* Buttons */}
          <div className="container d-flex justify-content-left align-items-center my-3" id="hero-btn-box">
            <button className="custom-btn mx-3">Explore Now</button>
            <button className="custom-btn mx-3">Learn Code</button>
          </div>
        </div>

        {/* Hero Right */}
        <div className="container d-flex" id="hero-right">
          <img
            src={HeroImage}
            className="card-img-top"
            id="hero-img"
            alt="Learn Coding Now No Regrets"
          />
        </div>
      </section>

      <section className="blog-section">
        <div className="container d-flex flex-column mt-5">
          {/* Section Heading */}
          <h1>Learn From Our Latest Blogs</h1>
          <p>
            Explore coding concepts from our latest blogs, complete with source
            code and in-depth explanations.
          </p>

          {/* Blog Articles */}
            <BlogSection />
        </div>
      </section>

      {/* Services Sections */}
      <section id="services-section">
        <article className="container">
          <h1>Our Services</h1>
          <p>
            Explore coding concepts from our latest blogs, complete with source
            code and in-depth explanations.
          </p>

          {/* Services */}
          <div id="services" className="d-flex">
            {/* Left */}
            <div className="services-left" style={{ width: "40%" }}>
              <img
                src={ServicesImage}
                className="card-img-top"
                id="services-img"
                style={{ height: "auto", borderRadius: "3vw" }}
                alt="How To Make Website"
              />
            </div>

            {/* Right */}
            <div
              className="services-right d-flex align-items-start"
            >
              {/* Web Service */}
              <div
                className="service-box d-flex align-items-center mb-4"
                style={{ width: "100%" }}
              >
                <img
                  src={webDevIcon}
                  style={{ width: "100px", marginRight: "20px" }}
                  alt="Web Development"
                />
                <div className="services-content">
                  <h2 style={{ marginBottom: "10px" }}>Web Development</h2>
                  <p>
                    We offer high-quality web development services to help you create modern,
                    responsive, and user-friendly websites.
                  </p>
                </div>
              </div>

              {/* Desgin Services */}
              <div
                className="service-box d-flex align-items-center mb-4"
                style={{ width: "100%" }}
              >
                <img
                  src={desingIcon}
                  style={{ width: "120px", marginRight: "20px" }}
                  alt="Graphic Design"
                />
                <div className="services-content">
                  <h2 style={{ marginBottom: "10px" }}>Graphic Design</h2>
                  <p>
                    Our creative team delivers top-notch design solutions to elevate
                    your brand's visual identity.
                  </p>
                </div>
              </div>

              {/* Starter Plan 1.0 */}
              <div
                className="service-box d-flex align-items-center mb-4"
                style={{ width: "100%" }}
              >
                <img
                  src={rocketIcon}
                  style={{ width: "115px", marginRight: "20px" }}
                  alt="Graphic Design"
                />
                <div className="services-content">
                  <h2 style={{ marginBottom: "10px" }}>Starter Plan 1.0</h2>
                  <p>
                    Our all-in-one solution provides everything your business needs to establish a powerful online presence, from a professional website to complete branding and social media optimization.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </article>
      </section>


      {/* Latest Videos */}
      <section className="container d-flex justify-content-center flex-column my-3">
        <div className="container d-flex flex-column">
          {/* Section Heading */}
          <h1>Check out our latest videos about coding</h1>
          <p>
            Explore coding concepts from our latest blogs, complete with source
            code and in-depth explanations.
          </p>
        </div>
        <VideoCarousel />
      </section>
    </main>
  );
}