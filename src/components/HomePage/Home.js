import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import LandingPageSection from "../LandingPageSection/LandingPageSection";

function Home() {
  return (
    <>
      <LandingPageSection {...homeObjOne} />
      <LandingPageSection {...homeObjThree} />
      <LandingPageSection {...homeObjTwo} />
      <LandingPageSection {...homeObjFour} />
    </>
  );
}

export default Home;
