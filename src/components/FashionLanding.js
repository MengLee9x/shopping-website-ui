import styled from "styled-components";
import HeroSection from "./HeroSection";
import NewArrivalsSection from "./NewArrivalsSection";
import TrendingDealsSelection from "./TrendingDealsSelection";
import SaleAdvertisement from "./SaleAdvertisement";
import AppDownloadPromo from "./AppDownloadPromo";
import BrandIcon from "./BrandIcon";

const StyledContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: white;
  height: 100%;
  border-radius: 20px;
  width: fit-content;

  .brand-list {
    background-color: #ebd96b;
    height: 82px;
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
    align-items: center;
  }
`;

const FashionLanding = () => {

  return (
    <StyledContainer>
      <HeroSection />
      <div className="brand-list">
        <BrandIcon iconSrc="/images/h2m.png" />
        <BrandIcon iconSrc="/images/obey.png" />
        <BrandIcon iconSrc="/images/shopify.png" />
        <BrandIcon iconSrc="/images/lacoste.png" />
        <BrandIcon iconSrc="/images/levis.png" />
        <BrandIcon iconSrc="/images/amazon.png" />
      </div>
      <NewArrivalsSection />
      <SaleAdvertisement />
      <TrendingDealsSelection />
      <AppDownloadPromo />
    </StyledContainer>
  );
};

export default FashionLanding;
