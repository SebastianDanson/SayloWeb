import React from "react";
import "./LandingPageSection.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function LandingPageSection({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__landing-section" : "home__landing-section darkBg"
        }
      >
        <div className="container">
          <div
            className="row home__landing-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__landing-text-wrapper">
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__landing-subtitle"
                      : "home__landing-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link
                  to={
                    "//apps.apple.com/ca/app/saylo-video-messenger/id1603124967"
                  }
                  target="_blank"
                >
                  <Button
                    buttonSize="btn--wide"
                    buttonColor={lightBg ? "white" : "blue"}
                  >
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__landing-img-wrapper">
                <img src={img} alt={alt} className="home__landing-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageSection;
