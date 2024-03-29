import React from "react";
import HeroBannerStyles from "./HeroBannerStyles";
import { NavButton } from "../Button/Button";
interface HeroBannerProps {
  heroBannerHeading?: string;
  heroBannerText?: string;
  heroBannerImage?: string;
  heroBannerButtonText?: string;
  heroBannerButtonClick?: string;
  heroBannerClass?: string;
}

const HeroBanner = ({
  heroBannerHeading,
  heroBannerText,
  heroBannerImage,
  heroBannerButtonText,
  heroBannerButtonClick,
  heroBannerClass,
}: HeroBannerProps) => {
  return (
    <HeroBannerStyles className={heroBannerClass}>
      <img src={heroBannerImage} alt="Hero" />
      <h1>{heroBannerHeading}</h1>
      <p>{heroBannerText}</p>
      <NavButton
        buttonText={heroBannerButtonText}
        buttonClick={heroBannerButtonClick}
      />
    </HeroBannerStyles>
  );
};
export default HeroBanner;
