import React from "react";
import { DiscoverBannerStyles } from "./DiscoverBannerStyles";

interface DiscoverBannerProps {
  discoverBannerImage: string;
  discoverBannerTitle: string;
  discoverBannerText: string;
  discoverImage: string;
}
const DiscoverBanner = ({
  discoverBannerImage,
  discoverBannerTitle,
  discoverBannerText,
  discoverImage,
}: DiscoverBannerProps) => {
  return (
    <DiscoverBannerStyles>
      <img src={discoverBannerImage} />
      <img src={discoverImage} className="logo" />
      <h1>{discoverBannerTitle}</h1>
      <p>{discoverBannerText}</p>
    </DiscoverBannerStyles>
  );
};
export default DiscoverBanner;
